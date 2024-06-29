import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoModule } from './empleado/empleado.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RegistroEmpleado';
}
