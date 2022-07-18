import { Component, OnInit } from '@angular/core';
import { NavigateService } from '@app/core/services/navigate/navigate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private navigateService: NavigateService) {}

  ngOnInit() {}
  goHomePage(): void {
    this.navigateService.toRoot();
  }
}
