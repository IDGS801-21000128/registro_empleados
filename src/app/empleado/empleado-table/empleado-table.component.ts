import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-table',
  templateUrl: './empleado-table.component.html',
  styleUrls: ['./empleado-table.component.css']
})
export class EmpleadoTableComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.empleadoService.empleados$.subscribe(data => {
      this.empleados = data;
    });
  }

  removeEmpleado(index: number) {
    this.empleadoService.removeEmpleado(index);
  }
}
