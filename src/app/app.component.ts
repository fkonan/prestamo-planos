import { Component, OnInit, signal, Signal } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BreadcrumbService } from './shared/services/breadcrumb.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	constructor(
		private primeNgConfig: PrimeNGConfig,
		private breadcrumbService: BreadcrumbService,
	) {}

	ngOnInit(): void {
		this.primeNgConfig.ripple = true;
		this.breadcrumbService.setBreadcrumbs([
			{ label: 'Inicio', url: 'https://www.bucaramanga.gov.co/' },
			{ label: 'Prestamo de planos' },
		]);
	}
}
