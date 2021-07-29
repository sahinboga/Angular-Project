
import { Component } from '@angular/core';


declare var gtag: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula-Project';
  // constructor(public router: Router) {
  //   const navEndevents = router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   );
  //   navEndevents.subscribe((event: NavigationEnd) => {
  //     gtag('config', 'G-7XJ7FEG9FZ', {
  //       'page_path': event.urlAfterRedirects
  //     })
  //   })

  // }
}
