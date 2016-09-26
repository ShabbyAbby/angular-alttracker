import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterInfoComponent } from './character-info.component';
import { CharacterComponent } from './character.component';
import { DashboardComponent } from './dashboard.component';
import { CharacterService } from './character.service';

import { routing } from './app.routing';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	routing
  ],
  declarations:	[
  	AppComponent,
  	CharacterInfoComponent,
  	CharacterComponent,
  	DashboardComponent
  ],
  providers: [
	CharacterService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
