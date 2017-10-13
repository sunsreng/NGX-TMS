import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }
  public toggleSidenav() {
    this.layoutService
      .toggle()
      .then(() => { });
  }
}
