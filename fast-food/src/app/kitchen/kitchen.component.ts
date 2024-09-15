import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { pedido } from '../models/pedido';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {


  constructor(private pedidoservice: PedidoService) { }


  @Output() pedidolisto = new EventEmitter<pedido>();
  pedidosPendientes: pedido[] = []
  pedidoencocion:pedido = new pedido();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pedidosPendientes = this.pedidoservice.getPedidosAcocinar()
    console.log(this.pedidosPendientes)
  }
  cocinar(index: number) {
    this.pedidoencocion = this.pedidosPendientes[index];
  }


  terminarCoccion(pedido: pedido) {
    this.pedidolisto.emit(pedido)
    }
    
}
