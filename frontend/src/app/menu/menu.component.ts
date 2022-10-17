import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../shared/services/load-scripts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;
  public userName: string | null;

  constructor(private name: LoadScriptsService) {
    name.Load(["menu"]);

    this.miToken = 0;
    this.userName = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
  public logout(): void {
    Swal.fire({
      title: 'Estás seguro!',
      text: '¿Quieres cerrar sesión?',
      icon: 'warning',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true,
      preConfirm: (login) => {

      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if (localStorage.getItem('personalToken')) {
          localStorage.removeItem('personalToken');
        }
        window.location.reload();
        Swal.fire('Proceso terminado. Logout OK')
      }
    }) // fin de pregunta estas seguro?

  }
}
