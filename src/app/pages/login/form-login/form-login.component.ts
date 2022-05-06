import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators as V } from '@angular/forms';
import { AuthUserService } from '../../../shared/services/auth-user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  loginForm = new FormGroup({
    correo: new FormControl('', [V.required, V.email]),
    contrasena: new FormControl('', V.required),
  });
  constructor(private auth: AuthUserService) {}

  ngOnInit(): void {}
  loginSumbit() {
    /* sacamos solo un valor por este medio */
    /* const control = this.registroForm.get("nombre") as FormControl; */

    /* obtenemos todos los valores del formulario por este medio */
    const loginForm = this.loginForm.value;

    this.auth.loginUser(loginForm);
  }
}
