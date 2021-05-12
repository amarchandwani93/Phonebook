import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact-list/contact.model';
import { ContactService } from '../contact-list/contact.service';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
    contact: Contact;
    id: number

    constructor(private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router ) {}

    ngOnInit(): void {
        this.route.params.subscribe( (params: Params) => {
            this.id = +params['id'];
            this.contact = this.contactService.getContact(this.id);
            this.contactService.contactsChanged.subscribe( (contacts:Contact[]) => {
                if(contacts) {
                    this.contact = contacts[this.id];
                }
            });
        });
    }

    onEditContact() {
        this.router.navigate(['edit'], { relativeTo: this.route })
    }

    onDeleteContact() {
        if(confirm('Are you sure you want to delete?')){
            this.contactService.deleteContact(this.id);
            this.router.navigate(['../'], { relativeTo: this.route } );
        }
    }
}
