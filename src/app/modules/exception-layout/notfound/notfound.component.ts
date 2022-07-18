import { Component, OnInit } from '@angular/core';
import { NavigateService } from '@app/core/services/navigate/navigate.service';

@Component({
  selector: 'uni-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private navigateService: NavigateService) { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.navigateService.toRoot();
  }

}
