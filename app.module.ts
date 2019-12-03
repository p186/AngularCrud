import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonTestComponent } from './json-test/json-test.component';
import { SerachtableComponent } from './serachtable/serachtable.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
///import { SerachComponent } from './serach/serach.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    JsonTestComponent,
    SerachtableComponent,
    //SerachComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
