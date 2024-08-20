import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environments } from '../../../environments/environments ';
import { Parametros } from '../models/Parametros.interfaces';

@Injectable({
	providedIn: 'root',
})

export class ParametrosService {
	private baseUrl: string = environments.baseUrl;
	private apiUrl: string = environments.apiUrl;

	constructor(private http: HttpClient) {}

	getParametros(): Observable<Parametros[] | null> {
		return this.http
			.get<{ parametros: Parametros[] } | null>(
				`${this.baseUrl}/api/general/parametros/get`,
			)
			.pipe(
				map((response) => (response ? response.parametros : null)),
				catchError(() => of(null)),
			);
	}
}
