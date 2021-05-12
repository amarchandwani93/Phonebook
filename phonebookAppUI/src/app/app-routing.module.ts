import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactDetailsComponent } from "./phonebook/contact-details/contact-details.component";
import { ContactEditComponent } from "./phonebook/contact-edit/contact-edit.component";
import { PhoneBookStartComponent } from "./phonebook/phone-book-start/phone-book-start.component";
import { PhonebookComponent } from "./phonebook/phonebook.component";

const appRoutes: Routes = [
    { path: '', component: PhonebookComponent, children: [
        { path: '', component: PhoneBookStartComponent },
        { path: 'new', component: ContactEditComponent },
        { path: ':id', component: ContactDetailsComponent },
        { path: ':id/edit', component: ContactEditComponent }
    ]}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
