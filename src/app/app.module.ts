import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PasswordValidationComponent } from './password-validation.component';



@NgModule({
  declarations: [
    PasswordValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PasswordValidationComponent]
})
export class AppModule { }
