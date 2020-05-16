import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRequestComponent } from './contact-request/contact-request.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [ContactRequestComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
