import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimerComponenteComponent } from './miprimer-componente/miprimer-componente.component';
import { MisegundoComponenteComponent } from './misegundo-componente/misegundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimerComponenteComponent,
    MisegundoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
