import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { MastheadModule } from './masthead/masthead.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavigationModule, MastheadModule, AboutModule, ProjectsModule, ContactModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
