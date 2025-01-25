import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RescatadosService } from '../rescatados.service';
import { Rescatado } from '../rescatado';
import { RescatadosModificarComponent } from '../rescatados-modificar/rescatados-modificar.component'; // Componente para modificar rescatados

@Component({
  selector: 'app-rescatados',
  templateUrl: './rescatados.component.html',
  styleUrls: ['./rescatados.component.scss']
})
export class RescatadosComponent implements OnInit {

  rescatados: Rescatado[] = []; // Lista para almacenar los rescatados
  nuevoRescatado: Rescatado = {
    id: '',
    nombre: '',
    foto: '',
    edad: 0,
    sexo: '',
    procedencia: '',
    valoracion_medica: '',
    medico_id: 0,
    rescate_id: 0,
    created_at: '',
    updated_at: ''
  };

  constructor(
    private modalService: NgbModal,
    private rescatadosService: RescatadosService
  ) {}

  ngOnInit(): void {
    this.cargarRescatados();
    document.body.style.backgroundColor = 'rgb(33, 37, 41)'; // Cambiar el color de fondo
  }

  /**
   * Método para cargar la lista de rescatados desde el servicio.
   */
  cargarRescatados(): void {
    this.rescatadosService.getRescatados().subscribe(
      (data: Rescatado[]) => {
        this.rescatados = data;
      },
      error => {
        console.error('Error al cargar los rescatados:', error);
        alert('Error al cargar los rescatados. Intenta nuevamente.');
      }
    );
  }

  /**
   * Método auxiliar para obtener el ID máximo actual.
   */
  obtenerMaxId(): number {
    return this.rescatados.length > 0 ? Math.max(...this.rescatados.map(rescatado => parseInt(rescatado.id, 10))) : 0;
  }

  /**
   * Método para crear un nuevo rescatado con un ID secuencial.
   */
  crearRescatado(): void {
    const maxId = this.obtenerMaxId();
    this.nuevoRescatado.id = (maxId + 1).toString(); // Generar el próximo ID disponible
    this.rescatadosService.addRescatado(this.nuevoRescatado).subscribe(
      () => {
        alert('Rescatado creado exitosamente.');
        this.resetFormulario();
        this.cargarRescatados(); // Actualizar la lista
      },
      error => {
        console.error('Error al crear rescatado:', error);
        alert('Hubo un error al registrar el rescatado.');
      }
    );
  }

  /**
   * Método para eliminar un rescatado.
   */
  eliminarRescatado(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este rescatado?')) {
      this.rescatadosService.deleteRescatado(id).subscribe(
        () => {
          this.rescatados = this.rescatados.filter(rescatado => rescatado.id !== id);
          alert('Rescatado eliminado correctamente.');
        },
        error => {
          console.error('Error al eliminar rescatado:', error);
          alert('No se pudo eliminar el rescatado. Intenta nuevamente.');
        }
      );
    }
  }

  /**
   * Método para abrir el modal de modificación de un rescatado.
   */
  IrAModificarRescatado(rescatado: Rescatado): void {
    if (!rescatado) {
      console.warn('Rescatado inválido');
      alert('El rescatado seleccionado no es válido para modificar.');
      return;
    }

    try {
      const modalRef = this.modalService.open(RescatadosModificarComponent, {
        size: 'lg',
        centered: true,
        backdrop: 'static'
      });

      modalRef.componentInstance.rescatado = rescatado; // Pasar el rescatado al componente de modificación

      modalRef.result
        .then(() => {
          console.log('Modal cerrado exitosamente.');
          this.cargarRescatados(); // Refrescar la lista tras cerrar el modal
        })
        .catch(error => {
          console.warn('El modal fue cerrado sin cambios.', error);
        });
    } catch (error) {
      console.error('Error al abrir el modal de modificación:', error);
      alert('Hubo un problema al intentar abrir la pantalla de modificación del rescatado.');
    }
  }

  /**
   * Método para resetear el formulario de creación.
   */
  resetFormulario(): void {
    this.nuevoRescatado = {
      id: '',
      nombre: '',
      foto: '',
      edad: 0,
      sexo: '',
      procedencia: '',
      valoracion_medica: '',
      medico_id: 0,
      rescate_id: 0,
      created_at: '',
      updated_at: ''
    };
  }
}
