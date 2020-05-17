import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Contact } from './contact.model';

@Component({
  selector: 'hl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;

  private contactsCollection: AngularFirestoreCollection<Contact>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.contactsCollection = this.afs.collection<Contact>('contacts');
  }

  submit() {
    this.contactsCollection
      .add({
        dateCreated: new Date(),
        name: this.name,
        email: this.email,
        message: this.message,
        phoneNumber: this.phoneNumber,
      })
      .then(
        (r) => this.success(r),
        (reason) => this.error(reason)
      );
  }

  // TODO show success/error modal
  success(result) {
    alert('success:' + result);
  }
  error(err) {
    alert('error:' + err);
  }
}
