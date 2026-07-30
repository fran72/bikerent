import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Propietario {
    nombre: string;
    verificado: boolean;
    desde: string;
    imagen: string;
}

interface CaracteristicaDetalle {
    nombre: string;
    valor: string;
    icono: string;
}

interface MotoDetalle {
    id: number;
    nombre: string;
    modelo: string;
    precio: number;
    precioBase: number;
    precioDescuento: number;
    ahorro: number;
    imagen: string;
    cc: number;
    tipo: string;
    descripcion: string;
    propietario: Propietario;
    caracteristicas: CaracteristicaDetalle[];
    incluidoEnPrecio: string[];
    extrasYAccesorios: string[];
    horaInicio: string;
    horaFin: string;
    fechaDisponibleDesde: string;
}

@Component({
    selector: 'app-detalle',
    imports: [CommonModule],
    templateUrl: './detalle.component.html',
    styleUrl: './detalle.component.scss'
})
export class DetalleComponent implements OnInit {
    moto: MotoDetalle | null = null;

    // Mock data
    private motos: { [key: number]: MotoDetalle } = {
        1: {
            id: 1,
            nombre: 'Yamaha MT 07 A2 ABS',
            modelo: 'Yamaha MT 07',
            precio: 210.82,
            precioBase: 212.50,
            precioDescuento: 53,
            ahorro: 1.68,
            imagen: 'https://www.motofichas.com/images/cache/10-yamaha-mt-07-2025-estudio-azul-01-398-a-mobile.jpg',
            cc: 689,
            tipo: 'Naked',
            descripcion: 'Motocicleta de alquiler. Condición perfecta. Está en condiciones perfectas; garantías sobre todos los daños cubiertos por el seguro.',
            propietario: {
                nombre: 'Harisson M.',
                verificado: true,
                desde: 'Miembro desde 2019',
                imagen: 'https://via.placeholder.com/50'
            },
            caracteristicas: [
                {
                    nombre: 'afortunadamente',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'No pantalla',
                    valor: '',
                    icono: '✗'
                },
                {
                    nombre: 'Sin frengs',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'En alquiler',
                    valor: '',
                    icono: '✓'
                }
            ],
            incluidoEnPrecio: [
                'Seguro y protección reembolsable',
                'Gestión de garantía flexible',
                'Automoción con camarera 24/7',
                'Asistencia en carretera 24/7'
            ],
            extrasYAccesorios: [
                'Casco',
                'Guantes',
                'Equipaje',
                'Soporte'
            ],
            horaInicio: '10:00',
            horaFin: '10:00',
            fechaDisponibleDesde: '2024-09-01'
        },
        2: {
            id: 2,
            nombre: 'Kawasaki Ninja 650',
            modelo: 'Kawasaki Ninja 650',
            precio: 65.00,
            precioBase: 65.00,
            precioDescuento: 60,
            ahorro: 0,
            imagen: 'https://www.motofichas.com/images/phocagallery/Kawasaki/ninja-650-2026/10-kawasaki-ninja-650-2026-estudio-verde-01.jpg',
            cc: 649,
            tipo: 'Deportiva',
            descripcion: 'Kawasaki Ninja 650 en perfectas condiciones. Ideal para los amantes de las motos deportivas.',
            propietario: {
                nombre: 'Carlos G.',
                verificado: true,
                desde: 'Miembro desde 2020',
                imagen: 'https://via.placeholder.com/50'
            },
            caracteristicas: [
                {
                    nombre: 'ABS',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Pantalla',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Frenos ABS',
                    valor: '',
                    icono: '✓'
                }
            ],
            incluidoEnPrecio: [
                'Seguro completo',
                'Protección reembolsable',
                'Asistencia 24/7'
            ],
            extrasYAccesorios: [
                'Casco premium',
                'Guantes deportivos',
                'Maletas',
                'Soporte de teléfono'
            ],
            horaInicio: '09:00',
            horaFin: '21:00',
            fechaDisponibleDesde: '2024-09-05'
        }
    };

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = Number(params['id']);
            this.moto = this.motos[id] || null;
        });
    }

    reservarAhora(): void {
        alert(`Reserva iniciada para: ${this.moto?.nombre}`);
    }
}
