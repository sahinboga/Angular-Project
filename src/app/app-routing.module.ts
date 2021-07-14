import { HeadlinesComponent } from './headlines/headlines.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleNewsComponent } from './google-news/google-news.component';

const routes: Routes = [
  { path: '', component: HeadlinesComponent },
  { path: 'matriksnews', component: HeadlinesComponent },
  { path: 'googlenews', component: GoogleNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
