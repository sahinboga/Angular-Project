import { HttpClient } from '@angular/common/http';
import { GoogleNew } from './../models/googleNew';
import { Component, OnInit } from '@angular/core';
import * as xml2js from "xml2js";
import { Parser } from 'xml2js';

@Component({
  selector: 'google-news',
  templateUrl: './google-news.component.html',
  styleUrls: ['./google-news.component.css']
})
export class GoogleNewsComponent implements OnInit {
  rssData?: GoogleNew;
  constructor(private http: HttpClient) { }

  ngOnInit() {




  }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http.get<any>("http://www.trt.net.tr/rss/ekonomi.rss", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: GoogleNew) => {
          this.rssData = result;
          console.log(result)
        });
      })
    //console.log(this.rssData)
  }

}
