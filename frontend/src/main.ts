import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(AppRoutingModule)],
}).catch((err) => console.error(err));
