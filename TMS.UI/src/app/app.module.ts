import { UniqueDirective } from './auth/user-form/unique.directive';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    MatFormFieldModule,
    MatButtonToggleModule,
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
import { UserFormComponent } from './auth/user-form/user-form.component';
import { SizeComponent } from './auth/user-form/size/size.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestFormComponent,
    AppLayoutsComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    UserFormComponent,
    UniqueDirective,
    SizeComponent
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
    MatFormFieldModule,
    MatButtonToggleModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'request-form', pathMatch: 'full' },
      { path: 'request-form', component: RequestFormComponent },
      { path: 'user-form', component: UserFormComponent },
      { path: '**', redirectTo: 'request-form' }
    ])
  ],
  providers: [ LayoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
