import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments ';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Barrios } from '../models/Barrios.interfaces';

@Injectable({
	providedIn: 'root',
})
export class BarriosService {
	private baseUrl: string = environments.baseUrl;
	private apiUrl: string = environments.apiUrl;

	constructor(private http: HttpClient) {}

	getBarrios(): Observable<Barrios[] | null> {
		return this.http
			.get<{ barrios: Barrios[] } | null>(
				`${this.baseUrl}/api/general/barrios/get`,
			)
			.pipe(
				map((response) => (response ? response.barrios : null)),
				catchError(() => of(null)),
			);
	}
}
