import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from '../../shared/services/stepper.service';

@Component({
	selector: 'field-buttons',
	templateUrl: './buttons.component.html',
	styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
	constructor(private router: Router, private stepperService: StepperService) {}

	radicar(): void {
		this.stepperService.advance();
	}
}
