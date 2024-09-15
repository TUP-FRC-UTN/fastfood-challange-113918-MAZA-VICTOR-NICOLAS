import { Injectable } from '@angular/core';
import { pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  pedidosAcocinar: pedido[] = [];

  getPedidosAcocinar() {
    return this.pedidosAcocinar
  }

  agregarPedidosACocinar(pedido: pedido) {
    this.pedidosAcocinar.push(pedido)
  }

  eliminarPedidos(){
    this.pedidosAcocinar = []
  }

  eliminarpedido(index:number){
    console.log(index)
    this.pedidosAcocinar.splice(index,1)
    console.log(this.pedidosAcocinar)
  }
}
