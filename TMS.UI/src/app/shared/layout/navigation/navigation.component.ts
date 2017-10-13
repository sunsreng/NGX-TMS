import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  visible = true;
  navList = [
    { name: 'Home', icon: 'home', urls: '/' },
    { name: 'Claim', icon: 'home', urls: '/' },
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
