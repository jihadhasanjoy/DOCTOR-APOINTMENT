import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  EGender,
  IMonthItem,
  IMonthItemForm,
} from '@app/core/models/month.model';
import { StoreService } from '@app/core/services/store/store.service';
import { combineDateAndTime } from '@app/core/utils/dateTimeFormat';
import { markFormGroupTouched } from '@app/core/utils/markFormGroupAndTouched';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-apoinment-editor',
  templateUrl: './apoinment-editor.component.html',
  styleUrls: ['./apoinment-editor.component.scss'],
})
export class ApoinmentEditorComponent implements OnInit {
  validateForm: FormGroup | undefined;
  isLoadingForm: boolean = false;
  genders = EGender;
  constructor(
    private nzModalRef: NzModalRef,
    private fb: FormBuilder,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.createValidationForm();
  }
  createValidationForm(): void {
    this.validateForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      lastName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      email: new FormControl<string>('', [Validators.email]),
      gender: new FormControl<EGender>(EGender.male, [Validators.required]),
      age: new FormControl<number | undefined>(undefined),
      date: new FormControl<Date | undefined>(new Date(), [
        Validators.required,
      ]),
      time: new FormControl<Date | undefined>(new Date(), [
        Validators.required,
      ]),
    });
  }
  onCreateNewAppoinment(): void {
    if (!this.validateForm) {
      return;
    }
    markFormGroupTouched(this.validateForm);

    if (this.validateForm.invalid) {
      return;
    }
    const values: IMonthItemForm = this.validateForm.value;
    const payload: IMonthItem = {
      ...values,
      date: combineDateAndTime(
        values.date.toISOString(),
        values.time.toISOString()
      ),
      time: values.time.toISOString(),
    };
    this.storeService.onCreateNewMonthItem(payload);
    this.isLoadingForm = true;
    setTimeout(() => {
      this.destroyModal(true);
    }, 1000);
  }
  destroyModal(data?: boolean): void {
    this.nzModalRef.destroy(data);
    this.isLoadingForm = false;
  }
}
