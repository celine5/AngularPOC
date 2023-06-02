import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from '../layouts/layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddClientComponent } from './add-client/add-client.component';



const routes: Routes = [
  {
    path:'',
    component:LayoutsComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'all-projects',
        component:AllProjectsComponent
      },
      {
        path:'add-project',
        component:AddProjectComponent
      },
      {
        path:'all-clients',
        component:AllClientsComponent
      },
      {
        path:'add-client',
        component:AddClientComponent
      },
      
      {
        path:'all-employees',
        component:AllEmployeesComponent
      },
      {
        path:'add-employee',
        component:AddEmployeeComponent
      },
      
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
