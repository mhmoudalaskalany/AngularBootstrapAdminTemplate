import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModules } from './primeng';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNgModules,
    NgSelectModule,
    NgbModule
  ],
  exports: [PrimeNgModules, NgSelectModule]
})
export class ThirdPartyModule { }
