import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './charity-app/home/components/home.component';
import { ContactComponent } from './charity-app/contact/components/contact.component';
import { AboutComponent } from './charity-app/about/components/about.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
]

export const CHARITY_APP_ROUTES = RouterModule.forRoot(ROUTES)