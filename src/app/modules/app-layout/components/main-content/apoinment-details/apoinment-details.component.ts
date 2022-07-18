import { Component, Input, OnInit } from '@angular/core';
import { IMonthItem } from '@app/core/models/month.model';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-apoinment-details',
  templateUrl: './apoinment-details.component.html',
  styleUrls: ['./apoinment-details.component.scss'],
})
export class ApoinmentDetailsComponent implements OnInit {
  @Input() monthItem: IMonthItem | undefined;
  constructor(private nzModalRef: NzModalRef) {}

  ngOnInit() {}

  destroyModal(data?: boolean): void {
    this.nzModalRef.destroy(data);
  }
}
