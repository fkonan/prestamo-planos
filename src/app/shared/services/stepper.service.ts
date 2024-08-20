import { Injectable, signal, Signal } from '@angular/core';
import { Step } from '../interfaces/step.interface';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class StepperService {
	private steps: Step[] = [
		{ label: 'Inicio', percentage: 15, route: '/home' },
		{ label: 'Hago mi solicitud', percentage: 50, route: '/radicar' },
		{ label: 'En proceso', percentage: 80, route: '/proceso' },
		{ label: 'Respuesta', percentage: 100, route: '/respuesta' },
	];

	private currentStepIndex = signal(this.loadCurrentStepIndex());

	constructor(private router: Router) {}

	private loadCurrentStepIndex(): number {
		const savedStepIndex = localStorage.getItem('currentStepIndex');
		return savedStepIndex ? parseInt(savedStepIndex, 10) : 0;
	}

	private saveCurrentStepIndex(index: number) {
		localStorage.setItem('currentStepIndex', index.toString());
	}

	getSteps(): Step[] {
		return this.steps;
	}

	getCurrentStepIndex(): Signal<number> {
		return this.currentStepIndex;
	}

	setStep(index: number) {
		console.log(index)
		if (index >= 0 && index < this.steps.length) {
			this.currentStepIndex.set(index);
			this.saveCurrentStepIndex(index);
			this.router.navigate([this.getCurrentRoute()]);
		}
	}

	advance() {
		if (this.currentStepIndex() < this.steps.length - 1) {
			this.setStep(this.currentStepIndex() + 1);
		}
	}

	back() {
		if (this.currentStepIndex() > 0) {
			this.setStep(this.currentStepIndex() - 1);
		}
	}

	getCurrentRoute(): string {
		return this.steps[this.currentStepIndex()].route;
	}
}
