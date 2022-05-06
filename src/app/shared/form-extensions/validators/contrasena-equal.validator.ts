import {
    AbstractControl,
    FormControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const contrasenaEqual: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const contrasena = group.get('contrasena') as FormControl;
    const rcontrasena = group.get('rcontrasena') as FormControl;
  
    return contrasena.value === rcontrasena.value
      ? null
      : { contrasenaEqual: true };
  };
  