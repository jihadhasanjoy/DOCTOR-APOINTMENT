import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EMonthKeys,
  EMonthValues,
  IMonth,
  IMonthItem,
} from '@app/core/models/month.model';
import { NavigateService } from '@app/core/services/navigate/navigate.service';
import { StoreService } from '@app/core/services/store/store.service';
import { range } from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { ApoinmentDetailsComponent } from './apoinment-details/apoinment-details.component';
import { ApoinmentEditorComponent } from './apoinment-editor/apoinment-editor.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit, OnDestroy {
  paramsId: string | undefined;
  selectedMonth: number | undefined;
  selectedDate: Date | undefined;
  allMonthNames = EMonthKeys;
  allMonthKeyNames = EMonthValues;
  selectedMonthInfo: IMonth | undefined;
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private navigate: NavigateService,
    private storeService: StoreService,
    private nzModalService: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.paramsId = this.route.snapshot.params['id'];
    if (this.paramsId && !this.isFoundMonthRange()) {
      this.navigate.toNotFoundPage();
    }
    this.selectedMonth = this.paramsId
      ? Number(this.paramsId)
      : this.getCorrentMonthNumber();

    this.onWeekNameChange(this.selectedMonth);

    this.subscriptions.push(
      this.storeService.selectedMonthInformation$.subscribe((respone) => {
        this.selectedMonthInfo = respone;
      })
    );
  }
  onCreateNewApoinment(): void {
    const modal = this.nzModalService.create({
      nzTitle: `Appoinment Create`,
      nzContent: ApoinmentEditorComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzAutofocus: null,
      nzWidth: '700px',
      nzViewContainerRef: this.viewContainerRef,
    });
    modal.afterClose.subscribe((result: boolean) => {
      this.navigate.toRefreshPage();
    });
  }
  onViewApoinmentDetails(monthItem: IMonthItem): void {
    const modal = this.nzModalService.create({
      nzTitle: `Appoinment Details`,
      nzContent: ApoinmentDetailsComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzAutofocus: null,
      nzWidth: '700px',
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        monthItem: monthItem,
      },
    });
  }
  onWeekNameChange(event: number): void {
    const selectedMonth = event;
    const changeDate = new Date().setMonth(selectedMonth - 1);
    this.selectedDate = new Date(changeDate);
    this.storeService.setSelectedMonthInfor(selectedMonth);
    this.navigate.toNaviage(selectedMonth);
  }
  onDateselectChange(date: Date): void {
    this.selectedDate = new Date(date);
    const selectedMonth = this.selectedDate.getMonth() + 1;
    this.selectedMonth = selectedMonth;
    this.storeService.setSelectedMonthInfor(selectedMonth);
    this.navigate.toNaviage(selectedMonth);
  }
  isFoundMonthRange(): boolean {
    return range(1, 13).includes(Number(this.paramsId));
  }
  getCorrentMonthNumber(): number {
    return new Date().getMonth() + 1;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
