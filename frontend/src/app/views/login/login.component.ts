import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User
  constructor(
    private elementRef: ElementRef,
    private loginService: LoginService,
    private router: Router) 
    {
    this.user = new User();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = '#7A7777';
    }

  ngOnInit(): void {
  }
  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('personalToken', `${data}`);
        this.router.navigate(['/']).then(()=>{window.location.reload();});
      },
      (error: Error) => {
        console.error("Error al realizar el acceso- login");
      }
    )
  }
}
