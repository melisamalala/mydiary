import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WriteComponent } from './write/write.component';
import { WriteinformComponent } from './writeinform/writeinform.component';
import { WritedetailsComponent } from './writedetails/writedetails.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WriteComponent,
    WriteinformComponent,
    WritedetailsComponent,
    DiaryFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
