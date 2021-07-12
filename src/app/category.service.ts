import { Category } from './models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "https://dev.matrikswebtrader.com/training/homework/assets/dummy-service/default.asp?type=newsCategory"
  constructor(private http: HttpClient) {


  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);

  }
}
