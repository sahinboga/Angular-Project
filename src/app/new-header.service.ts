import { NewHeader } from './models/newHeader';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewHeaderService {

  url = "https://dev.matrikswebtrader.com/training/homework/assets/dummy-service/default.asp?type=newsHeader"
  constructor(private http: HttpClient) { }

  getNewHeader(): Observable<NewHeader[]> {

    return this.http.get<NewHeader[]>(this.url);
  }
}
