import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
    constructor(private httpClient: HttpClient) {}

    private contacts: Contact[] = [];

    contactSelected = new EventEmitter<Contact>();
    contactsChanged = new Subject<Contact[]>();

    getContacts() {
        this.httpClient
            .get('http://localhost:3000/contacts')
            .subscribe((resp: Contact[]) => {
                this.contacts = resp;
                this.contactsChanged.next(this.contacts)
            });
    }

    getContact(id: number) {
        return this.contacts[id];
    }

    addNewContact(newContact: Contact) {
        this.httpClient
            .post('http://localhost:3000/contacts/', newContact)
            .subscribe((resp: Contact) => {
                this.contacts.push(resp);
                this.contactsChanged.next(this.contacts);
            });
    }

    updateContact(index: number, updatedContact: Contact) {
        this.httpClient
            .put(
                'http://localhost:3000/contacts/' +
                    this.contacts[index].phoneNumber,
                updatedContact
            )
            .subscribe((resp: Contact) => {
                this.contacts[index] = resp;
                this.contactsChanged.next(this.contacts);
            });

    }

    deleteContact(index: number) {
        this.httpClient
            .delete(
                'http://localhost:3000/contacts/' + this.contacts[index].phoneNumber
            )
            .subscribe((resp: Contact) => {
                this.contacts.splice(index, 1);
                this.contactsChanged.next(this.contacts);
            });

    }
}
