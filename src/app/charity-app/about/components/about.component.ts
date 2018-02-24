import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent { 
    private pageTitle:String = 'Somethings about us';
    private pageDescription:String = 'Who are we, what are we?';
}