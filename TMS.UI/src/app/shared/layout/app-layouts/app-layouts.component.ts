import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './app-layouts.component.html',
  styleUrls: ['./app-layouts.component.css']
})
export class AppLayoutsComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private layoutService: LayoutService) { }

  public ngOnInit(): void {
    this.layoutService.setSidenav(this.sidenav);
  }

}
