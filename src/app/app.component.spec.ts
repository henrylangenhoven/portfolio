import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { NavigationComponent } from './navigation/navigation.component';
import { MastheadComponent } from './masthead/masthead.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactRequestComponent } from './contact/contact-request/contact-request.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(NavigationComponent),
        MockComponent(MastheadComponent),
        MockComponent(AboutComponent),
        MockComponent(ProjectsComponent),
        MockComponent(ContactRequestComponent),
        MockComponent(ContactComponent),
        MockComponent(FooterComponent),
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
