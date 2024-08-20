import { Injectable } from '@angular/core';
import {
	FormControl,
	ValidationErrors,
	FormGroup,
	AbstractControl,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorService {

	/**
	 * Solo letras y espacios
	 * solo email
	 * solo numeros
	 * solo letras
	 */
	public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
	public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
	public numberPattern: string = '^[0-9]+$';
	public onlyLetterPattern = '^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$';

	public isValidField(form: FormGroup, field: string) {
		return form.controls[field].errors && form.controls[field].touched;
	}

	public getFieldError(
		form: FormGroup,
		field: string,
		patternMsg?: string,
	): string | null {
		if (!form.controls[field]) return null;
		const errors = form.controls[field].errors || {};
		for (const key of Object.keys(errors)) {
			switch (key) {
				case 'required':
					return 'Este campo es requerido';
				case 'minlength':
					return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
				case 'maxlength':
					return `Maximo ${errors['maxlength'].requiredLength} caracters.`;
				case 'pattern':
					return `${patternMsg ? patternMsg : 'Formato Incorrecto'}`;
				case 'notEqual':
					return `${patternMsg ? patternMsg : 'Los valores no coinciden'}`;
				default:
					return `Error: ${patternMsg ? patternMsg : key}`;
			}
		}
		return null;
	}
}
