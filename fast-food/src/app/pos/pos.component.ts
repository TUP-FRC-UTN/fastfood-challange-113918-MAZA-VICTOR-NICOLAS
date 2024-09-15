import { Component, EventEmitter, Output } from '@angular/core';
import { pedido } from '../models/pedido';
import { FormsModule, NgForm } from '@angular/forms';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {

  @Output() orderemit = new EventEmitter<pedido>();

constructor(private pedidoservice:PedidoService){}
  ped: pedido = new pedido();
  identity:number = 0;
  ordenar(form: NgForm) {


    if (form.valid) {
      this.ped = form.value
      
      this.ped.number = this.identity;
      this.identity += 1;

      this.orderemit.emit(this.ped)
      
      this.pedidoservice.agregarPedidosACocinar(this.ped)
      this.ped = new pedido();
    };


  }
}
