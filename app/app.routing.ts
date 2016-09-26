import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character.component';
import { DashboardComponent } from './dashboard.component';

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
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);