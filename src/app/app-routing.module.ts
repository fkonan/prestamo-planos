import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { RadicarComponent } from './public/radicar/radicar.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,data: { breadcrumb: 'home' }
	},
	{
		path: 'radicar',
		component: RadicarComponent,
	},
	{ path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
