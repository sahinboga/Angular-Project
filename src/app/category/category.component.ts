import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: any;
  constructor(private http: HttpClient) {

    http.get("https://dev.matrikswebtrader.com/training/homework/assets/dummy-service/default.asp?type=newsCategory")
      .subscribe(response => {
        this.categories = response;
      })
  }

  ngOnInit(): void {
  }

}
