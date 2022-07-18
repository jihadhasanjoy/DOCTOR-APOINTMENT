import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnumToArrayPipe } from '@app/core/pipes/enumToArray.pipe';
import { KeysPipe } from '@app/core/pipes/keys.pipe';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { AppLayoutComponent } from './app-layout.component';
import { AppLayoutRoutes } from './app-layout.routing';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ApoinmentDetailsComponent } from './components/main-content/apoinment-details/apoinment-details.component';
import { ApoinmentEditorComponent } from './components/main-content/apoinment-editor/apoinment-editor.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RefreshPageComponent } from './components/refresh-page/refresh-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutRoutes,
    NzLayoutModule,
    NzCalendarModule,
    NzBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzSpinModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzTimePickerModule,
  ],
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    ApoinmentDetailsComponent,
    ApoinmentEditorComponent,
    RefreshPageComponent,
    // pipes
    EnumToArrayPipe,
    KeysPipe,
  ],
  exports: [EnumToArrayPipe, KeysPipe],
  providers: [],
})
export class AppLayoutModule {}
