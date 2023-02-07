import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServicesService } from '.././api-services.service';
import { TableEditComponent } from '.././Dialog/table-edit/table-edit.component';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  displayedColumns = ['Id', 'first name', 'last name', 'email', 'Actions'];
  data: any;
  value: any;
  user_data: any;
  constructor(
    private router: Router,
    private api: ApiServicesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.get_table_data();
  }
  get_table_data() {
    console.log('s1 ');
    // this.api.get_table_data().subscribe(
    //   (res) => {
    //     console.log('s2');
    //     console.log('getFieldsFn RESPONSE: ', res);
    //   },
    //   (err) => {
    //     console.log('Error!: ', err);
    //   }
    // );
    this.api.get_table_data().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  showPrompt(user_data: any): void {
    console.log(user_data);
    const dialogRef = this.dialog.open(TableEditComponent, {
      width: '350px',
      height: '400px',
      data: user_data,
    });
  }
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  Logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
