import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-list/contact.model';
import { ContactService } from './contact-list/contact.service';

@Component({
    selector: 'app-phonebook',
    templateUrl: './phonebook.component.html',
    styleUrls: ['./phonebook.component.css'],
})
export class PhonebookComponent implements OnInit {
    selectedContact: Contact;
    constructor(private contactService: ContactService) {}

    ngOnInit(): void {
    }
}
