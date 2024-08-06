import { Injectable } from '@angular/core';
import { Signal, signal } from '@angular/core';

import { BreadcrumbItem } from '../interfaces/breadcrumb.interface';

@Injectable({
	providedIn: 'root',
})
export class BreadcrumbService {
	private breadcrumbItems = signal<BreadcrumbItem[]>([]);

	setBreadcrumbs(items: BreadcrumbItem[]): void {
		// this.breadcrumbItems = signal(items);
		this.breadcrumbItems.set(items); // Actualiza la señal
	}

	getBreadcrumbs(): BreadcrumbItem[] {
		return this.breadcrumbItems();
	}
}
