import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientAddEditComponent } from '../client-add-edit/client-add-edit.component';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'mobile', 'email', 'companyName','currency','billingMethod','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(
    private _dialog:MatDialog,
    private _empService:EmployeeService,
    ){ }

    ngOnInit(): void {
      this.getClientList();
    }

  openAddEditClientForm(){
   const dialogRef= this._dialog.open(ClientAddEditComponent);
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val){
        this.getClientList();
      }
    },
   });
  }

  getClientList(){
    this._empService.getClientList().subscribe({
      next : (res) => {
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator= this.paginator;

      },
      error:(err) => {
        console.log(err)
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

  deleteClient(id:number){
    this._empService.deleteClient(id).subscribe({
      next : (res) => {
        alert('Client deleted!');
        this.getClientList();
      },
      error: console.log,
    })

  }
  openEditForm(data:any){
    const dialogRef= this._dialog.open(ClientAddEditComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val) => {
        if(val) {
          this.getClientList();
        }
      },
     });

    }
}
