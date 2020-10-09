import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PacienteComponent } from './paciente/paciente.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuxiliarProgramarProcedimientoComponent } from './auxiliar-programar-procedimiento/auxiliar-programar-procedimiento.component';
import { AuxiliarDocumentacionComponent } from './auxiliar-documentacion/auxiliar-documentacion.component';
import { AuxiliarMaterialesComponent } from './auxiliar-materiales/auxiliar-materiales.component';
import { IntrumentosEquiposComponent } from './intrumentos-equipos/intrumentos-equipos.component';
import { AuxiliarEspecialistasComponent } from './auxiliar-especialistas/auxiliar-especialistas.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuxiliarEspecialistasComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
