import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		StepperComponent,
		BreadcrumbComponent,
	],
	imports: [CommonModule, PrimeNgModule],
	exports: [
		HeaderComponent,
		FooterComponent,
		StepperComponent,
		BreadcrumbComponent,
	],
})
export class SharedModule {}
