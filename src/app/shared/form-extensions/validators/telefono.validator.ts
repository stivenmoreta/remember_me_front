import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const telefonoValidator: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    
  
    return group.value.length >= 8
      ? null
      : { telefonoValidator: true };
  };
  