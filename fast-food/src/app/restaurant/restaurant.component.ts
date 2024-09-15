import { Component, Input } from '@angular/core';
import { pedido } from '../models/pedido';
import { DeliveryComponent } from "../delivery/delivery.component";
import { POSComponent } from "../pos/pos.component";
import { CommonModule } from '@angular/common';
import { KitchenComponent } from "../kitchen/kitchen.component";
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryComponent, POSComponent, CommonModule, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  entregar() {
    throw new Error('Method not implemented.');
  }
  pedidosIngresados: pedido[] = [];

  pedidoslistos: pedido[] = [];
  constructor(private pesdidoservice: PedidoService) { }


  ngOnInit(): void {
    this.pedidosIngresados = this.pesdidoservice.getPedidosAcocinar()
  }



  savePedido(pedido: pedido) {
  }

  agregarAentrega(pedido: pedido) {
    this.pedidoslistos.push(pedido)

  }

}
