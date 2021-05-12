import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../contact-list/contact.service';

@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
    id: number;
    editmode = false;
    contactForm: FormGroup;

    constructor(private route: ActivatedRoute,
        private contactService: ContactService,
        private router: Router) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.editmode = params['id'] != null;
            this.InitForm();
        });
    }
    onSubmit(){

        if(this.editmode){
            this.contactService.updateContact(this.id, this.contactForm.value); //as we have filled in the same format
        } else {
            this.contactService.addNewContact(this.contactForm.value);
        }
        this.router.navigate(['../'], { relativeTo: this.route} );
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route} );
    }

    private InitForm() {
        let firstName = '';
        let lastName = '';
        let phoneNumber = 0;
        let countryCode = 0;

        if(this.editmode) { // if edit mode fill the contact form with selected contact
            const contact = this.contactService.getContact(this.id);
            firstName = contact.firstName;
            lastName = contact.lastName;
            phoneNumber = contact.phoneNumber;
            countryCode = contact.countryCode;
        }

        this.contactForm = new FormGroup({
            'firstName' : new FormControl(firstName, Validators.required),
            'lastName': new FormControl(lastName),
            'phoneNumber': new FormControl(phoneNumber, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            'countryCode': new FormControl(countryCode, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        });
    }
}
