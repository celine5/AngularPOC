import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path:'',
    loadChildren:() => import('./pages/pages.module').then((mod) => mod.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
