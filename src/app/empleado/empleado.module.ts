import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { EmpleadoTableComponent } from './empleado-table/empleado-table.component';
import { EmpleadoComponent } from './empleado/empleado.component';




@NgModule({
  declarations: [
    EmpleadoFormComponent,
    EmpleadoTableComponent,
    EmpleadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EmpleadoComponent
  ]
})
export class EmpleadoModule { }
