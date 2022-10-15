import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { CreditosComponent } from './creditos/creditos.component';
import { AhorrosComponent } from './ahorros/ahorros.component';
import { SegurosComponent } from './seguros/seguros.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ConvocatoriaComponent,
    CreditosComponent,
    AhorrosComponent,
    SegurosComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class LandingModule { }