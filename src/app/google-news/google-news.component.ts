import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { GoogleNew, IRssItem } from './../models/googleNew';
import { Component, OnInit, Inject } from '@angular/core';
import * as xml2js from "xml2js";
import { Parser } from 'xml2js';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'google-news',
  templateUrl: './google-news.component.html',
  styleUrls: ['./google-news.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class GoogleNewsComponent {
  rssData: GoogleNew | undefined;
  dataSource: MatTableDataSource<IRssItem>
  displayedColumns: string[] = ['title'];

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }


  ngOnInit() {

    this.GetRssFeedData();


  }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http.get<any>("https://www.trt.net.tr/rss/ekonomi.rss", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: GoogleNew) => {

          this.rssData = result;
          var news = result.rss.channel[0].item;
          this.dataSource = new MatTableDataSource(news)
          console.log(this.dataSource)
        });
      })
  }
  searchTitle(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  DisplayDescription(item: IRssItem) {

    console.log(localStorage.setItem(item.title, "true"))
    const dialogRef = this.dialog.open(GoogleNewsDetail, {
      width: '500px',
      height: '400px',
      data: {
        title: item.title,
        description: item.description,
        link: item.link
      }
    });
  }
  getItems(item: IRssItem) {
    let local = localStorage.getItem(item.title)
    return local?.toLocaleLowerCase() == "true"
  }

}
@Component({
  selector: 'google-news-detail',
  templateUrl: 'google-news-detail.html',
})
export class GoogleNewsDetail {

  constructor(@Inject(MAT_DIALOG_DATA) public data: GoogleNewsDetailData) { }
}

export interface GoogleNewsDetailData {
  title: string;
  description: string;
  link: string;
}
