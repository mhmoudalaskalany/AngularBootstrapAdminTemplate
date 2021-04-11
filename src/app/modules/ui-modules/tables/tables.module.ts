import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'shared-components/shared-components.module';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent }
]

@NgModule({
  declarations: [
    BasicTableComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class TablesModule { }
