import { Detail } from './models/detail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  url = "https://dev.matrikswebtrader.com/training/homework/assets/dummy-service/newsDetail.asp?id="
  constructor(private http: HttpClient) {
  }

  getDetail(id: number): Observable<Detail> {

    return this.http.get<Detail>(this.url + id);
  }
}
