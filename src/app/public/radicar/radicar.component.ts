import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';

import { BreadcrumbService } from '../../shared/services/breadcrumb.service';
import { StepperService } from '../../shared/services/stepper.service';
import { BarriosService } from '../../core/services/barrios.service';
import { Barrios } from '../../core/models/Barrios.interfaces';
import { ValidatorService } from '../../core/services/validator.service';
import {
	PrestamoPlanos,
	EstadoSolicitud,
	AceptaTyN,
} from '../../core/models/PrestamoPlanos.interface';
import { formatDate } from '@angular/common';

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

	public barrios: Barrios[] = [];
	public modalidadLicencia: string[] = [];

	public fechaActual: Date = new Date();
	public estadosSolicitud = Object.values(EstadoSolicitud);
	public aceptaTyN = Object.values(AceptaTyN);
	public isLoading: boolean = false;
	visible: boolean = false;

	constructor(
		private stepperService: StepperService,
		private breadcrumbService: BreadcrumbService,
		private vs: ValidatorService,
		private fb: FormBuilder,
		private barriosServices: BarriosService,
	) {}

	@ViewChild('direccionModal', { static: true }) direccionModal!: ElementRef;

	public myForm: FormGroup = this.fb.group({
		fecha_solicitud: [
			formatDate(this.fechaActual, 'yyyy-MM-dd', 'en'),
			[Validators.required],
		],

		nombre_solicitante: [
			'',
			[
				Validators.required,
				Validators.maxLength(100),
				Validators.pattern(this.vs.namePattern),
			],
		],
		documento_identificacion: [
			'',
			[Validators.required, Validators.maxLength(20)],
		],
		direccion_solicitante: [
			'',
			[Validators.required, Validators.maxLength(255)],
		],
		correo_electronico: [
			'',
			[
				Validators.required,
				Validators.maxLength(255),
				Validators.pattern(this.vs.emailPattern),
			],
		],
		telefono: [
			'',
			[
				Validators.required,
				Validators.maxLength(50),
				Validators.pattern(this.vs.numberPattern),
			],
		],
		numero_licencia: ['', [Validators.required, Validators.maxLength(50)]],
		modalidad_licencia: ['', [Validators.required]],
		direccion_predio: ['', [Validators.required, Validators.maxLength(255)]],
		barrio: ['', [Validators.required]],
		numero_folio_matricula_inmobiliaria: [
			'',
			[Validators.required, Validators.maxLength(50)],
		],
		propietario_predio: [
			'',
			[
				Validators.required,
				Validators.maxLength(255),
				Validators.pattern(this.vs.namePattern),
			],
		],
		nombre_constructor: [
			'',
			[
				Validators.required,
				Validators.maxLength(255),
				Validators.pattern(this.vs.namePattern),
			],
		],
		fecha_aproximada_documentacion: ['', [Validators.required]],
		documentos_requeridos: [
			'',
			[Validators.required, Validators.maxLength(255)],
		],
		motivo_destinacion: ['', [Validators.required, Validators.maxLength(255)]],
		acepta_terminos: ['', [Validators.required]],
		autoriza_notificacion: [''],
		observaciones: ['', [Validators.maxLength(255)]],
		documento_certificado_libertad: [''],
		documento_no_encontrado: [''],
	});

	ngOnInit(): void {
		this.breadcrumbService.setBreadcrumbs([
			{ label: 'Inicio', url: 'https://www.bucaramanga.gov.co/' },
			{ label: 'Prestamo de planos', url: '/home' },
			{ label: 'Radicar' },
		]);
		this.loadOptions();
	}

	back(): void {
		this.stepperService.back();
	}

	public loadOptions() {
		this.barriosServices
			.getBarrios()
			.pipe(
				catchError((err) => {
					return of(null);
				}),
			)
			.subscribe((barrios) => {
				if (barrios) {
					this.barrios = barrios;
				}
			});
	}

	isValidField(field: string) {
		return this.vs.isValidField(this.myForm, field);
	}

	getFieldError(field: string, msj?: string | any) {
		return this.vs.getFieldError(this.myForm, field, msj);
	}

	handleDireccionSaved(direccion: string,field:string) {
		this.myForm.patchValue({ field: direccion });
		this.visible = false;
	}

	openDireccionModal() {
		this.visible = true;
	}
}
//crear un modelo y pasarlo a zod
