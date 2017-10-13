import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { AppLayoutsComponent } from 'shared/layout/app-layouts/app-layouts.component';
import { FooterComponent } from 'shared/layout/footer/footer.component';
import { HeaderComponent } from 'shared/layout/header/header.component';
import { NavigationComponent } from 'shared/layout/navigation/navigation.component';
import { LayoutService } from 'shared/services/layout.service';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    // Layout
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: [
    AppLayoutsComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent],
  exports: [
    AppLayoutsComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    LayoutService
  ]
})
export class SharedModule { }
