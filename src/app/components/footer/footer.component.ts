import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {

  links = [{
    label: 'Github',
    url: 'https://github.com/MickaelBaye/foodtrucks'
  },
  {
    label: 'Contact',
    url: 'https://github.com/MickaelBaye/foodtrucks/issues/new'
  }];

  text = '© Company 2017';

  constructor() { }

  ngOnInit() { }
}
