import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {


  constructor(private http: Http) { }

  getAllNews(){
    return this.http.get('http://localhost:3000/api/news').map(res => res.json());
  }

  getNews(query){
    return this.http.get('http://localhost:3000/api/news/'+query).map(res => res.json());
  }

  addNews(news){
    return this.http.post('http://localhost:3000/api/news',news).map(res => res.json());
  }

  removeNews(id){
    return this.http.delete('http://localhost:3000/api/news/'+id).map(res => res.json());
  }

  updateNews(updateNews){
    return this.http.post('http://localhost:3000/api/updateContact',updateNews).map(res => res.json());
  }

}
