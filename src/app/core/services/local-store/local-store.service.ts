import { Injectable } from '@angular/core';
import { IMonths } from '@app/core/models/month.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  constructor() {}

  setDataToLocalStorage(data: IMonths): void {
    localStorage.setItem('months', this.jsonEncript(data));
  }

  getDataToLocalStorage(): IMonths {
    return this.jsonDecript(localStorage.getItem('months')) || [];
  }

  public jsonEncript(data: object | string): string {
    return btoa(JSON.stringify(data));
  }

  private jsonDecript(data: string | null) {
    if (!data) {
      return null;
    }
    return JSON?.parse(atob(data));
  }
}
