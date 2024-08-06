import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StepperService } from '../../services/stepper.service';

@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.css',
})
export class StepperComponent implements OnInit {
	public steps = this.stepperService.getSteps();
	public currentStepIndex = this.stepperService.getCurrentStepIndex();

	constructor(private stepperService: StepperService, private router: Router) {}

	ngOnInit() {
		this.router.navigate([this.stepperService.getCurrentRoute()]);
	}

	getCurrentStep() {
		return this.steps[this.currentStepIndex()];
	}
}
