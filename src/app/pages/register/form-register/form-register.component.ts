import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as V } from '@angular/forms';
import { contrasenaEqual, telefonoValidator } from 'src/app/shared/form-extensions/validators';
import { AuthUserService } from '../../../shared/services/auth-user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  registroForm = new FormGroup(
    {
      nombre: new FormControl('', V.required),
      apellido: new FormControl('', V.required),
      rut: new FormControl('', V.required),
      correo: new FormControl('', [V.required, V.email]),
      telefono: new FormControl('', [V.required,telefonoValidator]),
      contrasena: new FormControl('', V.required),
      rcontrasena: new FormControl('', V.required),
    },
    contrasenaEqual
  );
  constructor(private authUserService:AuthUserService) { }

  ngOnInit(): void {
  }
  registerSumbit() {
    /* sacamos solo un valor por este medio */
    /* const control = this.registroForm.get("nombre") as FormControl; */

    /* obtenemos todos los valores del formulario por este medio */
    const registerForm = this.registroForm.value;
    console.log(registerForm);
    this.authUserService.createUser(registerForm)
  }
}
