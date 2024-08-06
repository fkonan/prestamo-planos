import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from '../../shared/services/stepper.service';
import { BreadcrumbService } from '../../shared/services/breadcrumb.services';

@Component({
	selector: 'app-radicar',
	templateUrl: './radicar.component.html',
	styleUrl: './radicar.component.css',
})
export class RadicarComponent implements OnInit {
	public titulo: string = 'TRAMITE DE PRESTAMO DE PLANOS';
	public subitulo: string = 'Radicar nuevo';

	public breadcrumbItems = [
		{ label: 'Inicio', url: 'https://www.bucaramanga.gov.co/' },
		{ label: 'Prestamo de planos', url: '/home' },
		{ label: 'Radicar' },
	];

	constructor(
		private stepperService: StepperService,
		private breadcrumbService: BreadcrumbService,
		private router: Router,
		private fb: FormBuilder,
	) {}

	public myForm: FormGroup = this.fb.group({
		radicado: ['', [Validators.required]],
		fecha_solicitud: ['', [Validators.required]],
		nombre_solicitante: ['', [Validators.required, Validators.maxLength(100)]],
		documento_identificacion: [
			'',
			[Validators.required, Validators.maxLength(20)],
		],
		direccion_solicitante: [
			'',
			[Validators.required, Validators.maxLength(255)],
		],

		password: ['', [Validators.required, Validators.minLength(6)]],
		password2: ['', [Validators.required]],
	});

	ngOnInit(): void {
		//cargar datos en el form
		// this.myForm.patchValue({});
		this.breadcrumbService.setBreadcrumbs([
			{ label: 'Inicio', url: 'https://www.bucaramanga.gov.co/' },
			{ label: 'Prestamo de planosssssss' },
		]);
	}

	back(): void {
		this.stepperService.back();
	}

	// onSubmit() {
	// 	this.stepperService.advance();
	// 	this.router.navigate([this.stepperService.getCurrentRoute()]);
	// }
}
//crear un modelo y pasarlo a zod
