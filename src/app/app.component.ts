import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsApi: NewsApiService){
    console.log("App componenet constructor called....");
  }

  ngOnInit(){
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //this.newsApi.initArticles().subscribe(data => this.mSources = data['sources']);
  }

  /* searchArticles(source){
    console.log("You searched the source ---" + source);
    this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  } */
}
