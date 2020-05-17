import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { MastheadModule } from './masthead/masthead.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavigationModule, MastheadModule, PortfolioModule, AboutModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
