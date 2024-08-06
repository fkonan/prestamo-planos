import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AcordionComponent } from './acordion/acordion.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RadicarComponent } from './radicar/radicar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
	declarations: [
		HomeComponent,
		AcordionComponent,
		ButtonsComponent,
		InformacionComponent,
		RadicarComponent,
	],
	imports: [CommonModule, RouterModule, SharedModule, PrimeNgModule],
})
export class PublicModule {}
