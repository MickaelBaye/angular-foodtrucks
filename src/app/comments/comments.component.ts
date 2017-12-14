import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../comment';
import { CREDENTIALS } from '../authentication';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.css']
})

export class CommentsComponent implements OnInit {

  comment: Observable<any>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.comment = db.object('comments/1').valueChanges();
    this.login();
  }

  ngOnInit() { }

  login() {
    this.afAuth.auth.signInWithCredential(
      firebase.auth.EmailAuthProvider.credential(
        CREDENTIALS.email,
        CREDENTIALS.password));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
