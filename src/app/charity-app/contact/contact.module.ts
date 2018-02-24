import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../app-common/app-common.module';

import { ContactComponent } from './components/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

@NgModule({
    declarations: [
        ContactComponent,
        ContactFormComponent,
        ContactDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppCommonModule
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule { }