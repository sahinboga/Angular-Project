
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula-Project';
  constructor(public router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-7XJ7FEG9FZ',
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    })

  }
}
