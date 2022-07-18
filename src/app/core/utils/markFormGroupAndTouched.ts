import { FormControl, FormGroup } from '@angular/forms';

export function markFormGroupTouched(formGroup: FormGroup): void {
  (Object as any).values(formGroup.controls).forEach((control: FormControl) => {
    control.markAsDirty();
    control.markAllAsTouched();
    control.updateValueAndValidity();
    if (control instanceof FormGroup) {
      markFormGroupTouched(control);
    }
  });
}
