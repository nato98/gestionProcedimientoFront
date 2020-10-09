import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { PacienteComponent } from '../../paciente/paciente.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AuxiliarDocumentacionComponent } from 'app/auxiliar-documentacion/auxiliar-documentacion.component';
import { AuxiliarMaterialesComponent } from 'app/auxiliar-materiales/auxiliar-materiales.component';
import { AuxiliarProgramarProcedimientoComponent } from 'app/auxiliar-programar-procedimiento/auxiliar-programar-procedimiento.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    PacienteComponent,
    NotificationsComponent,
    AuxiliarDocumentacionComponent,
    AuxiliarMaterialesComponent,
    AuxiliarProgramarProcedimientoComponent
  ]
})

export class AdminLayoutModule {}
