import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.scss']
})
export class NewProductDialogComponent implements OnInit {

  public freshnesslist: String[] = ['Brand New', 'Second Hand', `Refurbished`]

  constructor() { }

  ngOnInit(): void {
    console.log('productform', this.productform)
  }

  productform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    dateproduct: new FormControl(''),
    price: new FormControl(''),
    comment: new FormControl('')
  })

}
