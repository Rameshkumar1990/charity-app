import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact.component';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule { }