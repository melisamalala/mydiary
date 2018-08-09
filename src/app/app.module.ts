import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { WriteComponent } from './write/write.component';
// import { WriteinformComponent } from './writeinform/writeinform.component';
// import { WritedetailsComponent } from './writedetails/writedetails.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // WriteinformComponent,
    // WritedetailsComponent,
    DiaryFormComponent
  ],
  imports: [
    BrowserModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
