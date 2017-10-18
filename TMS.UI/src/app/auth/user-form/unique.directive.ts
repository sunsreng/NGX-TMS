import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[unique]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UniqueDirective),
      multi: true
    }
  ],
})
export class UniqueDirective implements Validator {

  validate(c: AbstractControl) {
    const db = ['sreng@sreng.com'];
    if (db.indexOf(c.value) !== -1) {
      return { uniqe: false };
    }
    return null;
  }
  constructor() { }

}
