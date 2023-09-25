import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './home/home.component';

// Shared
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Components
import { CardComponent } from './components/card/card.component';
import { CardImageComponent } from './components/card/card-image/card-image.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPriceComponent } from './components/card/card-price/card-price.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavSocialComponent } from './components/navbar/nav-social/nav-social.component';
import { NavMenuComponent } from './components/navbar/nav-menu/nav-menu.component';
import { NavLogoComponent } from './components/navbar/nav-logo/nav-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CardImageComponent,
    CardLabelComponent,
    CardPriceComponent,
    NavSocialComponent,
    NavMenuComponent,
    NavLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
