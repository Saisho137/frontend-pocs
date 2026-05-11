import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsWihoutAtomsComponent } from './components/forms-wihout-atoms/forms-wihout-atoms.component';
import { FormsWithAtomsComponent } from './components/forms-with-atoms/forms-with-atoms.component';
import { InputAtomComponent } from './components/forms-with-atoms/input-atom/input-atom.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormsWihoutAtomsComponent,
    FormsWithAtomsComponent,
    InputAtomComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
