import { Injectable } from '@angular/core';
import { IMonth, IMonthItem, IMonths } from '@app/core/models/month.model';
import { orderBy } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { LocalStoreService } from '../local-store/local-store.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private allDateInformation: IMonths = [];
  private selectedMonthInformation = new BehaviorSubject<IMonth | undefined>(
    undefined
  );
  selectedMonthInformation$ = this.selectedMonthInformation.asObservable();
  constructor(private localStorageServicce: LocalStoreService) {
    this.allDateInformation = this.localStorageServicce.getDataToLocalStorage();
    console.log(this.localStorageServicce.getDataToLocalStorage());
  }

  setSelectedMonthInfor(selectedMonth: number): void {
    const selectedMonthInfo = this.allDateInformation.find(
      (month) => month.monthNumber === selectedMonth
    )?.info;
    this.selectedMonthInformation.next(selectedMonthInfo);
  }
  onCreateNewMonthItem(monthItem: IMonthItem): void {
    const createMonth =
      (monthItem.date && new Date(monthItem.date).getMonth() + 1) || 1;
    this.setMonthDataOnStore(monthItem);
  }

  setMonthDataOnStore(monthItem: IMonthItem): void {
    const creationMonth =
      (monthItem.date && new Date(monthItem.date).getMonth() + 1) || 1;

    const creationDate =
      (monthItem.date && new Date(monthItem.date).getDate()) || 1;
    const getMonthInfo = this.generateDayModel(monthItem);

    if (!this.isFoundMonth(creationMonth)) {
      this.allDateInformation.push({
        monthNumber: creationMonth,
        info: getMonthInfo,
      });
      this.localStorageServicce.setDataToLocalStorage(this.allDateInformation);
      return;
    }
    if (
      this.isFoundMonth(creationMonth) &&
      !this.isFoundDay(creationMonth, creationDate)
    ) {
      const monthInfo = this.allDateInformation.find(
        (data) => data.monthNumber === creationMonth
      )?.info as IMonth;
      monthInfo[creationDate] = [monthItem];
      this.allDateInformation = [...this.allDateInformation];
      this.localStorageServicce.setDataToLocalStorage(this.allDateInformation);
      return;
    }

    if (
      this.isFoundMonth(creationMonth) &&
      this.isFoundDay(creationMonth, creationDate)
    ) {
      const monthInfo = this.allDateInformation.find(
        (data) => data.monthNumber === creationMonth
      )?.info as IMonth;
      const newMonthItem = orderBy(
        [...monthInfo[creationDate], monthItem],
        (item) => new Date(item?.date),
        'asc'
      );

      monthInfo[creationDate] = newMonthItem;
      this.allDateInformation = [...this.allDateInformation];
      this.localStorageServicce.setDataToLocalStorage(this.allDateInformation);
    }
  }

  generateDayModel(monthItem: IMonthItem): IMonth {
    const creationDate =
      (monthItem.date && new Date(monthItem.date).getDate()) || 1;
    return {
      [creationDate]: [monthItem],
    } as IMonth;
  }
  isFoundMonth(month: number): boolean {
    return this.allDateInformation
      .map((data) => data.monthNumber)
      .includes(month);
  }
  isFoundDay(month: number, day: number): boolean {
    const monthInfo = this.allDateInformation.find(
      (data) => data.monthNumber === month
    )?.info as IMonth;
    return day in monthInfo;
  }
}
