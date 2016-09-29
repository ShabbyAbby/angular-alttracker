import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }              from './app.component';
import { CharacterInfoComponent }    from './character-info.component';
import { CharacterComponent }        from './character.component';
import { DashboardComponent }        from './dashboard.component';
import { CharacterSearchComponenet } from './character-search.component';
import { CharacterNewComponent }     from './character-new.component';

import { CharacterService } from './character.service';    

import { routing } from './app.routing';
import './rxjs-extensions';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	routing
  ],
  declarations:	[
  	AppComponent,
    DashboardComponent,
  	CharacterInfoComponent,
  	CharacterComponent,
    CharacterSearchComponenet,
    CharacterNewComponent
  ],
  providers: [
	  CharacterService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
