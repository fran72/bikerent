import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Moto {
  id: number;
  nombre: string;
  tipo: string;
  imagen: string;
  cc: number;
  caracteristicas: string[];
  precio: number;
}

@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {
  motos: Moto[] = [
    {
      id: 1,
      nombre: 'Yamaha MT-07',
      tipo: 'Naked',
      imagen: 'https://www.motofichas.com/images/cache/10-yamaha-mt-07-2025-estudio-azul-01-398-a-mobile.jpg',
      cc: 689,
      caracteristicas: ['ABS'],
      precio: 55
    },
    {
      id: 2,
      nombre: 'Kawasaki Ninja 650',
      tipo: 'Deportiva',
      imagen: 'https://www.motofichas.com/images/phocagallery/Kawasaki/ninja-650-2026/10-kawasaki-ninja-650-2026-estudio-verde-01.jpg',
      cc: 649,
      caracteristicas: ['ABS'],
      precio: 60
    },
    {
      id: 3,
      nombre: 'BMW F 750 GS',
      tipo: 'Trail',
      imagen: 'https://www.outletmoto.com/cdnassets/products/shad-anclaje-w0fs88st_l.jpg',
      cc: 853,
      caracteristicas: ['ABS'],
      precio: 70
    },
    {
      id: 4,
      nombre: 'Triumph Street Twin',
      tipo: 'Clásica',
      imagen: 'https://www.motoplanete.com/triumph/zoom-700px/Triumph-900-Street-Twin-2022-700px.webp',
      cc: 900,
      caracteristicas: ['ABS'],
      precio: 50
    },
    {
      id: 5,
      nombre: 'Honda PCX 125',
      tipo: 'Scooter',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Honda_PCX125_2011_Front.JPG/960px-Honda_PCX125_2011_Front.JPG',
      cc: 125,
      caracteristicas: ['CBS'],
      precio: 35
    },
    {
      id: 6,
      nombre: 'Yamaha XMAX 250',
      tipo: 'Scooter',
      imagen: 'https://www.motofichas.com/images/stories/imagenes/pruebas/yamaha_xmax_250/yamaha-xmax-250-2010-2.jpg',
      cc: 250,
      caracteristicas: ['CBS'],
      precio: 35
    }
  ];

  constructor(private router: Router) { }

  verDetalles(id: number): void {
    this.router.navigate(['/motos', id]);
  }
}
