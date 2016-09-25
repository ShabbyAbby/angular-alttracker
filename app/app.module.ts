import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';


import { AppComponent } from './app.component';
import { CharacterInfoComponent } from './character-info.component'

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule
  ],
  declarations:	[
  	AppComponent,
  	CharacterInfoComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
