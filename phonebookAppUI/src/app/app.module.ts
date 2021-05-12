import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { ContactListComponent } from './phonebook/contact-list/contact-list.component';
import { ContactListItemComponent } from './phonebook/contact-list/contact-list-item/contact-list-item.component';
import { ContactDetailsComponent } from './phonebook/contact-details/contact-details.component';
import { ContactEditComponent } from './phonebook/contact-edit/contact-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { PhoneBookStartComponent } from './phonebook/phone-book-start/phone-book-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhonebookComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    PhoneBookStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
