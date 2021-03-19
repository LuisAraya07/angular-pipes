import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';
import { AppRoutingModule } from './app-routing.module';

//Cambiar el locale de la app
import  localeEs  from '@angular/common/locales/es-CR';
import  localeFr  from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );
registerLocaleData( localeFr );



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    SharedModule,
    SalesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CR'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
