import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { pedido } from '../models/pedido';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {

  pedidosEntregar: pedido[] = [];


  entregar() {
    throw new Error('Method not implemented.');
    }

}
