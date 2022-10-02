import { Product } from './model/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API: String = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  postProduct(data: Product) {
    return this.http.post(`${this.API}/products/add`, data)
  }

  getProducts() {
    return this.http.get(`${this.API}/products/all`)
  }

  editProduct(data: Product) {
    return this.http.put(`${this.API}/products/update`, data)
  }

  deleteProduct(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/products/delete/${Id}`);
  }
}
