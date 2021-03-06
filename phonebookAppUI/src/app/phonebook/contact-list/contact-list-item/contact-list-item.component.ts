import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
    selector: 'app-contact-list-item',
    templateUrl: './contact-list-item.component.html',
    styleUrls: ['./contact-list-item.component.css'],
})
export class ContactListItemComponent implements OnInit {
    @Input() contact: Contact;
    @Input() index: number;

    ngOnInit(): void {}

}
