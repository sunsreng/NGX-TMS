import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RequestFormComponent } from './core/components/request-form/request-form.component';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { AppLayoutsComponent } from './shared/layout/app-layouts/app-layouts.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { LayoutService } from './shared/services/layout.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestFormComponent,
    AppLayoutsComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'request-form', pathMatch: 'full' },
      { path: 'request-form', component: RequestFormComponent },
      { path: '**', redirectTo: 'request-form' }
    ])
  ],
  providers: [ LayoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
