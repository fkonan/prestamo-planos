import { Component, Input, OnInit, signal } from '@angular/core';
import { BreadcrumbItem } from '../../interfaces/breadcrumb.interface';
import { BreadcrumbService } from '../../services/breadcrumb.services';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
	public breadcrumbItems: BreadcrumbItem[] = [];

	constructor(private breadcrumbService: BreadcrumbService) {}

	ngOnInit(): void {
		this.breadcrumbItems = this.breadcrumbService.getBreadcrumbs();
	}
}
