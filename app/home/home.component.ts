import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  news: string[];
  query: string;
  isLoading: boolean;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log('Ready');
    this.news = [];
  }

  searchNews(){
    this.news = [];
    this.isLoading = true;
    this.newsService.getNews(this.query).subscribe(
      data => {
        this.news = data.news;
        this.isLoading = false;
      }
    );
  }

}
