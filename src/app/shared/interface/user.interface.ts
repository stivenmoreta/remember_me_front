export interface FormRegister {
  nombre: string;
  apellid: string;
  rut: string;
  correo: string;
  telefono: string;
  contrasena: string;
  rcontrasena: string;
}

export interface FormLogin {
  correo: string;
  contrasena: string;
}

export interface UserAuth{
  token: string;
  nombre:string
}
