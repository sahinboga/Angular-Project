import { NewHeaderService } from './../new-header.service';
import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { NewHeader } from '../models/newHeader';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent {

  newHeaders: NewHeader[] = [];
  categories: Category[] = [];
  headline: any;
  baseNewHeaders: NewHeader[] = [];

  constructor(private headerData: NewHeaderService, private categoryData: CategoryService) {


  }


  ngOnInit() {


    forkJoin([this.headerData.getNewHeader(), this.categoryData.getCategory()]).subscribe(result => {
      let temp: NewHeader[] = [];
      result[0].forEach(function (val) {
        let obje = Object.assign({}, val);
        temp.push(obje);
      });

      result[1] = result[1].sort((a, b) => a.description.localeCompare(b.description));
      for (let i = 0; i < result[0].length; ++i) {
        let category = result[1].find(x => x.code === temp[i].category);
        temp[i].categoryName = category ? category.description : "";

      }
      this.baseNewHeaders = temp;
      this.newHeaders = temp;
      this.categories = result[1];
    })



  }

  // ngOnNewHeader() {

  //   this.headerData.getNewHeader().subscribe(resheader => {
  //     this.newHeaders = resheader;

  //   })
  // }

  ngOnCategory() {
    this.categoryData.getCategory().subscribe(rescategory => {
      this.categories = rescategory;
    })
  }

  code: any;
  // Searching and filtering
  SearchFilter() {
    console.log(this.code)
    this.newHeaders = this.baseNewHeaders.filter(res => {
      return (this.headline == undefined || res.headline.toLocaleLowerCase().match(this.headline.toLocaleLowerCase())) &&
        (this.code === "allCategory" || res.category === this.code);
    })

  }

  //sorting
  key: string = 'date';
  reverse: boolean = true;
  sort(key2: any) {
    this.key = key2;
    this.reverse = !this.reverse;
    console.log(key2)
  }

  ReadLS(id: any) {
    localStorage.setItem(id, "true");


  }

  getItems(id: any) {
    let local = localStorage.getItem(id)
    return local?.toLocaleLowerCase() == "true"
  }

}
