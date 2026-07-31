import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-como-funciona',
    imports: [CommonModule, RouterModule],
    templateUrl: './como-funciona.component.html',
    styleUrl: './como-funciona.component.scss'
})
export class ComoFuncionaComponent {
    pasos = [
        {
            numero: 1,
            titulo: 'Registrarse y buscar',
            descripcion: 'Crea tu cuenta en BikeRent y busca la moto perfecta para tu viaje.',
            icono: '🔍'
        },
        {
            numero: 2,
            titulo: 'Seguro en Cleverea',
            descripcion: 'Contrata el seguro diario en Cleverea. Tú lo haces o nosotros nos encargamos.',
            icono: '🛡️'
        },
        {
            numero: 3,
            titulo: 'Reservar',
            descripcion: 'Selecciona las fechas y confirma tu reserva con todos los detalles.',
            icono: '📅'
        },
        {
            numero: 4,
            titulo: 'Recogida',
            descripcion: 'Recoge la moto en la ubicación acordada con el propietario.',
            icono: '🏍️'
        },
        {
            numero: 5,
            titulo: 'Disfruta',
            descripcion: 'Explora y disfruta tu aventura. Soporte 24/7 disponible.',
            icono: '😊'
        },
        {
            numero: 6,
            titulo: 'Devolución',
            descripcion: 'Devuelve la moto en las condiciones acordadas. ¡Listo!',
            icono: '✅'
        }
    ];
}
