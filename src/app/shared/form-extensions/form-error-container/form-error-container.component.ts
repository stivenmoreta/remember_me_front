import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'form-error-container',
  template: `
  <div *ngIf="control && control.invalid && (control.dirty || control.touched)">
    <ng-content></ng-content>
  </div>`,
})
export class FormErrorContainerComponent {
  @Input('forControl') control!: AbstractControl | null;
  constructor() {}
}
