import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../shared/services/stepper.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

	public steps = this.stepperService.getSteps();
	public currentStepIndex = this.stepperService.getCurrentStepIndex();

	public titulo: string = 'TRAMITE DE PRESTAMO DE PLANOS';
	public subitulo: string = 'Alcaldía de Bucaramanga';

	constructor(private stepperService: StepperService, private router: Router) {}

	ngOnInit(): void {
		 this.stepperService.setStep(0);
	}
}
