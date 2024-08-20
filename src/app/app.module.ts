import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//cambiar el local de la app
import localeEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

registerLocaleData(localeEs);

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,

		SharedModule,
		PublicModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'es-CO' },
		provideHttpClient(withInterceptorsFromDi()),

	],
	bootstrap: [AppComponent],
})
export class AppModule {}
