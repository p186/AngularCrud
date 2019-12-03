import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsonTestComponent } from './json-test/json-test.component';
import { SerachtableComponent } from './serachtable/serachtable.component'

//import {SerachComponent } from './serach/serach.component';

 
 
const routes: Routes = [
  { path: 'myheromahesh', component: JsonTestComponent },
  { path:'serach',component:SerachtableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
