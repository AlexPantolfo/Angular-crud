import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'date', 'productFreshness', 'price', 'comment', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
    private apiservice: ApiService,) {
  }

  ngOnInit(): void {
    this.apiservice.getProducts().subscribe({
      error: () => {
        alert("Error while getting the products")
      },
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
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

  openDialog(): void {
    const dialogRef = this.dialog.open(NewProductDialogComponent, {
      width: "30%"
    });
  }

  edit(data: any) {
    const dialogRef = this.dialog.open(NewProductDialogComponent, {
      width: "30%",
      data: data
    });
  }

  delete(id: number) {
    this.apiservice.deleteProduct(id).subscribe({
      error: () => {
        alert("Error while deleting the product")
      },
      next: () => {
        this.apiservice.getProducts().subscribe({
          error: () => {
            alert("Error while getting the products")
          },
          next: (res: any) => {
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator
            this.dataSource.sort = this.sort
          }
        })
      }
    })
  }
}