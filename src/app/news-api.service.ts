import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '23317534e59c46ff90b7e47a8bda6c7f';

  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.api_key);
    //return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.api_key);
    //return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
