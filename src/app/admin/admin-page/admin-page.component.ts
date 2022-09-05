import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ServicesService } from 'src/app/services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddComponent } from '../admin-add/admin-add.component';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  flights: any;


  constructor(public dialog: MatDialog, private userService: ServicesService) { }

  ngOnInit(): void {
    this.userService.getFlights().subscribe((data: any) => {
      this.flights = data;
    })
  }
  add() {
    let dialogRef = this.dialog.open(AdminAddComponent);
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result == 'success') {
              alert('successfully added flights')
        window.location.reload()
      }
      else
      {
         alert('please login with correct credentials')
      }
    });
  }
  edit(id:any) {
    let dialogRef = this.dialog.open(AdminEditComponent);
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result == 'success') {
        window.location.reload()
      }
    });
  }

  del(itemId: any) {
    alert('deleted')
    console.log(itemId);
    this.userService.delete(itemId).subscribe((data) => {
      console.log(data)
    })
  }

}
