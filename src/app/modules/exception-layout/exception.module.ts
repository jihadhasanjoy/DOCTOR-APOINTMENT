import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzResultModule } from 'ng-zorro-antd/result';
import { ExceptionRoutingModule } from './exception-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    ExceptionRoutingModule,
    NzResultModule,
    NzLayoutModule,
    NzButtonModule
  ]
})
export class ExceptionModule { }
