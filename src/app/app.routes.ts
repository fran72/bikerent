import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ComoFuncionaComponent } from './pages/como-funciona/como-funciona.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'motos', component: ListadoComponent },
    { path: 'motos/:id', component: DetalleComponent },
    { path: 'como-funciona', component: ComoFuncionaComponent },
    { path: 'contacto', component: ContactoComponent }
];
