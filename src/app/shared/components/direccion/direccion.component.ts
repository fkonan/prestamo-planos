import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parametros } from '../../../core/models/Parametros.interfaces';
import { ParametrosService } from '../../../core/services/parametros.service';
import { catchError, of } from 'rxjs';

@Component({
	selector: 'app-direccion',
	templateUrl: './direccion.component.html',
	styleUrl: './direccion.component.css',
})
export class DireccionComponent {
	@Output() direccionSaved = new EventEmitter<string>();
	@Input() visible: boolean = false;

	public direccionForm: FormGroup;
	public concatenatedAddress: string = '';

	public calle_carrera: string[] = [];
	public letras: string[] = [];

	constructor(
		private fb: FormBuilder,
		private parametrosServices: ParametrosService,
	) {
		this.parametrosServices
			.getParametros()
			.pipe(
				catchError((err) => {
					return of(null);
				}),
			)
			.subscribe((parametros) => {
				if (parametros) {
					this.calle_carrera = parametros
						.filter((parametro) => parametro.ParNomGru === 'ABREDIR')
						.map((parametro) => parametro.ParDes);

					this.letras = parametros
						.filter((parametro) => parametro.ParNomGru === 'LETRA')
						.map((parametro) => parametro.ParNom);
				}
			});

		this.direccionForm = this.fb.group({
			calle_carrera: [this.calle_carrera],
			nombre: [''],
			letra1: [this.letras],
			numero1: [''],
			letra2: [this.letras],
			numero2: [''],
			letra3: [this.letras],
			complemento: [''],
		});

		this.direccionForm.valueChanges.subscribe((values) => {
			this.updateConcatenatedAddress();
		});
	}

	updateConcatenatedAddress() {
		const {
			calle_carrera,
			nombre,
			letra1,
			numero1,
			letra2,
			numero2,
			letra3,
			complemento,
		} = this.direccionForm.value;

		this.concatenatedAddress = `
		${calle_carrera ? calle_carrera : ''}
		${nombre ? nombre : ''}
		${letra1 ? letra1 : ''}
		${numero1 ? numero1 : ''}
		${letra2 ? letra2 : ''}
		${numero2 ? numero2 : ''}
		${letra3 ? letra3 : ''}
		${complemento ? complemento : ''}`
			.replace(/\s+/g, ' ')
			.trim();
	}

	saveDireccion() {
		this.direccionSaved.emit(this.concatenatedAddress);
	}

	closeDireccionModal() {
		this.direccionSaved.emit(this.concatenatedAddress);
		this.direccionForm.reset();
	}
}
