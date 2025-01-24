

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Rescatado } from '../models/rescatado';
import { RescatadosService } from '../rescatados.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rescatados-modificar',
  templateUrl: './rescatados-modificar.component.html',
  styleUrls: ['./rescatados-modificar.component.scss']
})
export class RescatadosModificarComponent implements OnInit {
  @Input() rescatado: Rescatado | null = null; // Rescatado recibido desde el componente padre.
  @Output() onSave = new EventEmitter<Rescatado>(); // Emite el Rescatado modificado.
  @Output() onClose = new EventEmitter<void>(); // Emite un evento para cerrar el modal.
  originalRescatado: Rescatado | null = null; // Copia del Rescatado original para restaurar si se cancela.

  constructor(public activeModal: NgbActiveModal, private rescatadosService: RescatadosService) {}

  ngOnInit(): void {
    if (this.rescatado) {
      // Crear una copia profunda del Rescatado original
      this.originalRescatado = JSON.parse(JSON.stringify(this.rescatado));
    }
  }

  guardarCambios(): void {
    if (this.rescatado && this.rescatado.id) {
      this.rescatadosService.updateRescatado(this.rescatado.id, this.rescatado).subscribe(
        (response: Rescatado) => {
          console.log('Rescatado actualizado:', response);
          alert('Cambios guardados exitosamente.');
          this.activeModal.close(response); // Cierra el modal y envía el resultado
        },
        (error) => {
          console.error('Error al actualizar Rescatado:', error);
          alert('No se pudo actualizar el rescatado. Intenta nuevamente.');
        }
      );
    } else {
      alert('No hay datos para guardar.');
    }
  }

  cerrarModal(): void {
    if (confirm('¿Estás seguro de que deseas cancelar? Los cambios se revertirán.')) {
      if (this.originalRescatado && this.rescatado) {
        // Restaurar los datos originales
        Object.assign(this.rescatado, this.originalRescatado);
      }
      this.activeModal.close(); // Cerrar el modal
    }
  }
}
