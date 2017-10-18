import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  visible = true;
  navRequest = [
    { name: 'Request Form', icon: 'home', urls: '/request-form' },
    { name: 'User Form', icon: 'account_box', urls: '/user-form' },
    { name: 'Product', icon: 'date_range', urls: '/' },
    { name: 'Admin', icon: 'account_circle', urls: '/' }
  ];
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  showInfo(link) {
    console.log('log');
  }
  constructor() { }

  ngOnInit() {
  }

}
