import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
 
  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action'
    ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public _dialog:MatDialog, private _empService:EmployeeService){}

  ngOnInit(): void {
    this.getEmployeeList();
  }

    openAddEditEmpForm(){
     const dialogRef= this._dialog.open(EmpAddEditComponent);
     dialogRef.afterClosed().subscribe({
      next:(val) => {
        if(val) {
          this.getEmployeeList();
        }
      },
     });
     }
     getEmployeeList() {
      this._empService.getEmployeeList().subscribe({
        next: (res) =>{
         this.dataSource= new MatTableDataSource(res);
         this.dataSource.sort= this.sort;
         this.dataSource.paginator=this.paginator;
        },
        error: (err) => {
          console.log(err);
        }
      })
     }
     applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    deleteEmployee(id:number){
      this._empService.deleteEmployee(id).subscribe({
        next:(res) => {
          alert('Employee deleted successfully');
          this.getEmployeeList();
        },
      })
    }
    openEditForm(data:any){
      const dialogRef= this._dialog.open(EmpAddEditComponent,{
        data,
      });
      dialogRef.afterClosed().subscribe({
        next:(val) => {
          if(val) {
            this.getEmployeeList();
          }
        },
       });

      }
    
    }



