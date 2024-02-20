import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'welcome-screen', component: WelcomeScreenComponent },
    { path: 'customer-form', component: CustomerFormComponent },
    { path: 'customer-list', component: CustomerListComponent },
];
