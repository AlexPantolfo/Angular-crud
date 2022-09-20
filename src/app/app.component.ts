import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewProductDialogComponent, {
      width: "30%"
    });
  }
}