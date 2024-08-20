import { Injectable, signal, computed, Signal } from '@angular/core';
import { BreadcrumbItem } from '../interfaces/breadcrumb.interface';

@Injectable({
	providedIn: 'root',
})
export class BreadcrumbService {
	private breadcrumbItemsSignal = signal<BreadcrumbItem[]>([]);

	// Exponer una versión de solo lectura de la señal
	public breadcrumbs: Signal<BreadcrumbItem[]> = computed(() =>
		this.breadcrumbItemsSignal(),
	);

	setBreadcrumbs(items: BreadcrumbItem[]): void {
		this.breadcrumbItemsSignal.set(items);
	}
}
