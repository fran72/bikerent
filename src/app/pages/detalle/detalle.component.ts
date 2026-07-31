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
        },
        3: {
            id: 3,
            nombre: 'BMW F 750 GS',
            modelo: 'BMW F 750 GS',
            precio: 75.00,
            precioBase: 75.00,
            precioDescuento: 70,
            ahorro: 0,
            imagen: 'https://www.outletmoto.com/cdnassets/products/shad-anclaje-w0fs88st_l.jpg',
            cc: 853,
            tipo: 'Trail',
            descripcion: 'Moto trail de aventura BMW F 750 GS. Perfecta para viajes largos y terrain variado.',
            propietario: {
                nombre: 'María L.',
                verificado: true,
                desde: 'Miembro desde 2021',
                imagen: 'https://via.placeholder.com/50'
            },
            caracteristicas: [
                {
                    nombre: 'ABS',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Maleteros incluidos',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Control de tracción',
                    valor: '',
                    icono: '✓'
                }
            ],
            incluidoEnPrecio: [
                'Seguro aventura',
                'Protección reembolsable',
                'Asistencia 24/7',
                'Maleteros'
            ],
            extrasYAccesorios: [
                'Casco modular',
                'Botas de moto',
                'Chaqueta de aventura',
                'GPS'
            ],
            horaInicio: '08:00',
            horaFin: '22:00',
            fechaDisponibleDesde: '2024-09-10'
        },
        4: {
            id: 4,
            nombre: 'Triumph Street Twin',
            modelo: 'Triumph Street Twin',
            precio: 55.00,
            precioBase: 55.00,
            precioDescuento: 50,
            ahorro: 0,
            imagen: 'https://www.motoplanete.com/triumph/zoom-700px/Triumph-900-Street-Twin-2022-700px.webp',
            cc: 900,
            tipo: 'Clásica',
            descripcion: 'Triumph Street Twin retro clásica. Un diseño icónico con tecnología moderna.',
            propietario: {
                nombre: 'Antonio R.',
                verificado: true,
                desde: 'Miembro desde 2019',
                imagen: 'https://via.placeholder.com/50'
            },
            caracteristicas: [
                {
                    nombre: 'ABS',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Diseño retro',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Fácil de manejar',
                    valor: '',
                    icono: '✓'
                }
            ],
            incluidoEnPrecio: [
                'Seguro clásico',
                'Protección reembolsable',
                'Asistencia 24/7'
            ],
            extrasYAccesorios: [
                'Casco retro',
                'Guantes vintage',
                'Alforjas de cuero',
                'Espejo adicional'
            ],
            horaInicio: '09:00',
            horaFin: '20:00',
            fechaDisponibleDesde: '2024-09-08'
        },
        5: {
            id: 5,
            nombre: 'Honda PCX 125',
            modelo: 'Honda PCX 125',
            precio: 38.00,
            precioBase: 38.00,
            precioDescuento: 35,
            ahorro: 0,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Honda_PCX125_2011_Front.JPG/960px-Honda_PCX125_2011_Front.JPG',
            cc: 125,
            tipo: 'Scooter',
            descripcion: 'Honda PCX 125 scooter compacto y económico. Ideal para la ciudad.',
            propietario: {
                nombre: 'Juan P.',
                verificado: true,
                desde: 'Miembro desde 2022',
                imagen: 'https://via.placeholder.com/50'
            },
            caracteristicas: [
                {
                    nombre: 'Fácil de aparcar',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Bajo consumo',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'CBS (Frenos)',
                    valor: '',
                    icono: '✓'
                }
            ],
            incluidoEnPrecio: [
                'Seguro urbano',
                'Protección reembolsable',
                'Asistencia 24/7'
            ],
            extrasYAccesorios: [
                'Casco compacto',
                'Bolsa de transporte',
                'Soporte de móvil',
                'Espejo adicional'
            ],
            horaInicio: '07:00',
            horaFin: '23:00',
            fechaDisponibleDesde: '2024-09-01'
        },
        6: {
            id: 6,
            nombre: 'Yamaha XMAX 250',
            modelo: 'Yamaha XMAX 250',
            precio: 42.00,
            precioBase: 42.00,
            precioDescuento: 35,
            ahorro: 0,
            imagen: 'https://www.motofichas.com/images/stories/imagenes/pruebas/yamaha_xmax_250/yamaha-xmax-250-2010-2.jpg',
            cc: 250,
            tipo: 'Scooter',
            descripcion: 'Yamaha XMAX 250 scooter deportivo. Más potencia y confort para trayectos largos.',
            propietario: {
                nombre: 'Sofia T.',
                verificado: true,
                desde: 'Miembro desde 2020',
                imagen: 'https://via.placeholder.com/50'
            },
            caracteristicas: [
                {
                    nombre: 'Mayor potencia',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'Asiento cómodo',
                    valor: '',
                    icono: '✓'
                },
                {
                    nombre: 'CBS (Frenos)',
                    valor: '',
                    icono: '✓'
                }
            ],
            incluidoEnPrecio: [
                'Seguro deportivo',
                'Protección reembolsable',
                'Asistencia 24/7'
            ],
            extrasYAccesorios: [
                'Casco deportivo',
                'Bolsa de transporte grande',
                'Soporte de móvil premium',
                'Espejo panorámico'
            ],
            horaInicio: '07:00',
            horaFin: '23:00',
            fechaDisponibleDesde: '2024-09-03'
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
