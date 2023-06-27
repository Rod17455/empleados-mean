import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './pages/editar-empleado/editar-empleado.component';
import { EnlistarEmpleadosComponent } from './pages/enlistar-empleados/enlistar-empleados.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'crear-empleado'},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: 'editar-empleado/:id', component: EditarEmpleadoComponent},
  {path: 'listar-empleados', component: EnlistarEmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
