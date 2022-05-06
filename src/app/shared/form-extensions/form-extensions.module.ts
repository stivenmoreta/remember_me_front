import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorContainerComponent } from './form-error-container/form-error-container.component';
import { FormErrorMsgComponent } from './form-error-msg/form-error-msg.component';

@NgModule({
  declarations: [FormErrorContainerComponent, FormErrorMsgComponent],
  exports: [FormErrorContainerComponent, FormErrorMsgComponent],
  imports: [CommonModule],
})
export class FormExtensionsModule {}
