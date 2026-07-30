import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'motos', component: ListadoComponent },
    { path: 'motos/:id', component: DetalleComponent }
];
