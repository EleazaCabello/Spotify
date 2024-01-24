import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})
  errorSesion: Boolean = false

  constructor(private authService: AuthService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email:new FormControl('',[
          Validators.required,
          Validators.email
        ]), //VALOR INICIAL
        password: new FormControl('',[
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(6)
        ])
      }
    )
  }

  sendLogin(): void{
    console.log(this.formLogin.value.email)
    this.authService.sendPostAuth$(this.formLogin.value.email,this.formLogin.value.password).subscribe
    (responseOK => {
      this.router.navigate(['/','home','tracks'])
    },
    err => {
      this.errorSesion = true
    }
    )
  }
}
