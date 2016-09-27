import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character.component';
import { DashboardComponent } from './dashboard.component';
import { CharacterInfoComponent } from './character-info.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'character',
		component: CharacterComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'info/:id',
		component: CharacterInfoComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);