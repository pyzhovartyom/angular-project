import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { EventsSelectedComponent } from './components/events-selected/events-selected.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { PayingComponent } from './components/paying/paying.component';
import { ProceedPayingComponent } from './components/proceed-paying/proceed-paying.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SuccessComponent } from './components/success/success.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { AdminGuardGuard } from './_guards/admin-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/:id',
    component: EventsSelectedComponent
  },
  {
    path: 'events/:id/tickets',
    component: TicketsComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'paying',
    component: PayingComponent
  },
  {
    path: 'proceed-paying',
    component: ProceedPayingComponent,
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'terms',
    loadChildren: () => import('./components/terms/terms.module').then(data => data.TermsModule)
  },
  {
    path: '**',
    redirectTo: '/events',
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
