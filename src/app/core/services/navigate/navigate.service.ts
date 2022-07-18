import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router) {}

  toRoot(): void {
    this.router.navigate(['/']);
  }
  toNotFoundPage(): void {
    this.router.navigate(['/exception/404']);
  }

  toRefreshPage(): void {
    const currentUrl = this.router.url;
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }
  toNaviage(pageNumber: number): void {
    this.router.navigate([`/month/${pageNumber}`]);
  }
}
