import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleadosKey = 'empleados';
  private empleadosSubject = new BehaviorSubject<any[]>(this.getEmpleados());
  empleados$ = this.empleadosSubject.asObservable();

  constructor() {
    if (!localStorage.getItem(this.empleadosKey)) {
      localStorage.setItem(this.empleadosKey, JSON.stringify([]));
    }
  }

  private getEmpleados() {
    return JSON.parse(localStorage.getItem(this.empleadosKey) || '[]');
  }

  addEmpleado(empleado: any) {
    const empleados = this.getEmpleados();
    empleados.push(empleado);
    localStorage.setItem(this.empleadosKey, JSON.stringify(empleados));
    this.empleadosSubject.next(empleados);  // Notify subscribers of the change
  }

  removeEmpleado(index: number) {
    const empleados = this.getEmpleados();
    empleados.splice(index, 1);
    localStorage.setItem(this.empleadosKey, JSON.stringify(empleados));
    this.empleadosSubject.next(empleados);  // Notify subscribers of the change
  }
}
