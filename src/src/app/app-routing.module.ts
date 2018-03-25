import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { EventPageComponent } from './event-page/event-page.component';

const routes: Routes = [
  { path: 'popup', component: PopupComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: '', redirectTo: 'popup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
