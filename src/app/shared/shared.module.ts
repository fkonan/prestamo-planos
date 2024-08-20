import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		StepperComponent,
		BreadcrumbComponent,
		DireccionComponent,
	],
	imports: [
		CommonModule,
		PrimeNgModule,
		ReactiveFormsModule,
		DialogModule,
		ButtonModule,
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		StepperComponent,
		BreadcrumbComponent,
		DireccionComponent,
	],
})
export class SharedModule {}
