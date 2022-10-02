import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.scss']
})
export class NewProductDialogComponent implements OnInit {

  public freshnesslist: String[] = ['Brand New', 'Second Hand', `Refurbished`]

  constructor(
    private apiservice: ApiService,
    private dialogRef: MatDialogRef<NewProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('data: ', this.data)
    if (this.data) {
      this.formEdit();
    }
  }


  productform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    freshness: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required])
  })


  formEdit() {
    this.productform.patchValue({
      name: this.data.name,
      category: this.data.category,
      freshness: this.data.freshness,
      price: this.data.price,
      comment: this.data.comment
    })
  }

  Save() {
    let product: Product = {
      'name': this.productform.get('name')?.value,
      'category': this.productform.get('category')?.value,
      'freshness': this.productform.get('freshness')?.value,
      'price': this.productform.get('price')?.value,
      'comment': this.productform.get('comment')?.value,
    }

    console.log('save: ', product)

    this.apiservice.postProduct(product).subscribe({
      error: () => {
        alert("Error while creating the product")
      },
      next: () => {
        this.productform.reset();
        this.dialogRef.close();
      },
      complete: () => {
        //window.location.reload();
      }
    })
  }

}
