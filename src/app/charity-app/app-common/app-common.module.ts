import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { HeaderContactComponent } from "./components/header/header-contact.component";
import { HeaderMenuComponent } from "./components/header/header-menu.component";

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderContactComponent,
        HeaderMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        HeaderContactComponent,
        HeaderMenuComponent
    ]
})
export class AppCommonModule { }