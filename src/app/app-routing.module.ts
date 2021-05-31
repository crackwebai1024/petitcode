import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { IndividualhouseComponent } from './individualhouse/individualhouse.component';

const routes: Routes = [
  { path: 'house/:page/:id', component: IndividualhouseComponent },
  { path: 'house/:page', component: HousesComponent },
  { path: '', component: HousesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
