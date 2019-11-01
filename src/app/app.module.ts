import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
// import {MatRadioModule} from '@angular/material/radio';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SteponeComponent } from './stepone/stepone.component';
import { SteptwoComponent } from './steptwo/steptwo.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CardNumberDirective } from './card-number.directive';
import { CwDirective } from './cw.directive';
import { StepthreeComponent } from './stepthree/stepthree.component';
import { AddresComponent } from './addres/addres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepfourComponent } from './stepfour/stepfour.component';


@NgModule({
  declarations: [
    AppComponent,
    SteponeComponent,
    SteptwoComponent,
    CreditCardComponent,
    CardNumberDirective,
    CwDirective,
    StepthreeComponent,
    AddresComponent,
    StepfourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
