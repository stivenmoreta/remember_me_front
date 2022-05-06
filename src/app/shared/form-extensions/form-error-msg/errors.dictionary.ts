interface ErrorsDictionary {
    [key: string]: string;
  }
  
  export const errorsDictionary: ErrorsDictionary = {
    required: 'El campo es obligatorio.',
    email: 'Debe ser un email válido.',
    contrasenaEqual: 'Las contraseñas no coinciden.',
    telefonoValidator: 'El telefono debe tener un minimo de 9 numeros'
  };
  