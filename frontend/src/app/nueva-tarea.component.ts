import { Component } from '@angular/core';
import { WebService } from './web.service';

// utilizamos el output y el eventemmiter para capturar el evento y que no haga falta pulsar f5 para actualziar

@Component({
    selector: 'nueva-tarea',
    template: `
    <mat-card>
    <mat-card-title>Añadir Tarea</mat-card-title>
    
        <mat-form-field class="example-full-width">
        <mat-label>Nombre Usuario:</mat-label>
        <input [(ngModel)]="tarea.usuario" matInput placeholder="username">
        </mat-form-field>
        <br>
        <mat-form-field class="example-full-width">
        <mat-label>Tarea:</mat-label>
        <textarea [(ngModel)]="tarea.trabajo" matInput placeholder="Introduzca aqui su tarea"></textarea>
        </mat-form-field>
 

        <div class="example-button-row">
        <button (click)="post()" mat-raised-button color="primary">Enviar</button>
        </div>

    </mat-card>
`
})


export class NuevaTareaComponent {

    constructor(private webservice: WebService) { }


    tarea = { trabajo: '', usuario: '' }

    post() {
        this.webservice.postTask(this.tarea);
    }


}




