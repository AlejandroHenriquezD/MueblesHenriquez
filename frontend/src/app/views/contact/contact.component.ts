import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public user: User
  constructor(
    private elementRef: ElementRef,
    private router: Router) {
    this.user = new User();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = '#6D3FEB';
  }

  ngOnInit(): void {
  }
  public logout(): void {
    Swal.fire('Mensaje Enviado')
    this.router.navigate(['/'])
  }
}
