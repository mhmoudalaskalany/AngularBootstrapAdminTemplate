import { DataTableComponent } from './data-table/data-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ArabicNamePatternDirective } from 'core/services/directives/arabicNameValidator.directive';
import { DeviceArabicNamePatternDirective } from 'core/services/directives/deviceArabicNameValidator.directive';
import { DeviceEnglishNamePatternDirective } from 'core/services/directives/deviceEnglishNameValidator.directive';
import { EnglishNamePatternDirective } from 'core/services/directives/englishNameValidator.directive';
import { DeleteModalComponent } from './data-table/components/delete-modal.component';
import { PrimeNgModules } from 'third-party/primeng';
import { ThirdPartyModule } from 'third-party/third-party.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DataTableComponent,
    DeleteModalComponent,
    EnglishNamePatternDirective,
    ArabicNamePatternDirective,
    DeviceArabicNamePatternDirective,
    DeviceEnglishNamePatternDirective
  ],
  imports: [
    CommonModule,
    ThirdPartyModule,
    RouterModule,
    FormsModule,
    PrimeNgModules,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule
  ],
  exports: [
    DataTableComponent,
    EnglishNamePatternDirective,
    ArabicNamePatternDirective,
    DeviceArabicNamePatternDirective,
    DeviceEnglishNamePatternDirective,
    ThirdPartyModule,
    PrimeNgModules,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule
  ]
})
export class SharedComponentsModule { }
