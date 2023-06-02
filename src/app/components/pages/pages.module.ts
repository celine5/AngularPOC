import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddProjectComponent } from './add-project/add-project.component';
import {MatRadioModule} from '@angular/material/radio';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { ClientAddEditComponent } from './client-add-edit/client-add-edit.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddClientComponent } from './add-client/add-client.component';




@NgModule({
  declarations: [
    DashboardComponent,
    AllProjectsComponent,
    AddProjectComponent,
    AllEmployeesComponent,
    EmpAddEditComponent,
    AllClientsComponent,
    ClientAddEditComponent,
    AddEmployeeComponent,
    AddClientComponent,
   
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  
  ]
})
export class PagesModule { }
