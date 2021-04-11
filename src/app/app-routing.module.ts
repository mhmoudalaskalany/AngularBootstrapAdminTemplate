import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/ui-modules/forms/form.module').then(m => m.FormModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('./modules/ui-modules/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'basic-ui',
    loadChildren: () => import('./modules/ui-modules/basic-ui/basic-ui.module').then(m => m.BasicUiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
