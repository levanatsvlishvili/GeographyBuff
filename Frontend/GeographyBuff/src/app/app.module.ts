import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BasicelementsComponent } from './pages/home/basicelements/basicelements.component';
import { ModalComponent } from './pages/home/modal/modal.component';
import { NavigationComponent } from './pages/home/navigation/navigation.component';
import { NucleoiconsComponent } from './pages/home/nucleoicons/nucleoicons.component';
import { TypographyComponent } from './pages/home/typography/typography.component';
import { NotificationComponent } from './pages/home/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BasicelementsComponent,
    ModalComponent,
    NavigationComponent,
    NucleoiconsComponent,
    TypographyComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
