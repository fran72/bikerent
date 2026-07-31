import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface FormContacto {
    nombre: string;
    email: string;
    mensaje: string;
}

@Component({
    selector: 'app-contacto',
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
    form: FormContacto = {
        nombre: '',
        email: '',
        mensaje: ''
    };

    enviado = false;
    cargando = false;

    enviarMensaje(): void {
        if (this.form.nombre && this.form.email && this.form.mensaje) {
            this.cargando = true;

            // Simular envío de mensaje
            setTimeout(() => {
                console.log('Mensaje enviado:', this.form);
                this.enviado = true;
                this.cargando = false;

                // Limpiar formulario
                this.form = {
                    nombre: '',
                    email: '',
                    mensaje: ''
                };

                // Ocultar mensaje de éxito después de 3 segundos
                setTimeout(() => {
                    this.enviado = false;
                }, 3000);
            }, 1500);
        } else {
            alert('Por favor, completa todos los campos');
        }
    }
}
