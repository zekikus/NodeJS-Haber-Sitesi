import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: string;
  title: string;
  description: string;
  url: string;
  img: string;
  news: any[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(
      data => {
        this.news = data.news;
      }
    );
  }

  addNews(){
    var news = {
      title: this.title,
      desc: this.description,
      url: this.url,
      img: this.img
    };

    this.newsService.addNews(news).subscribe(
      data => {
          if(data.success){
            alert('Success');
            this.newsService.getAllNews().subscribe(
              data => {
                this.news = data.news;
              }
            );
          }else{
            alert('Something went wrong.');
          }
      }
    );
  }

  deleteNews(id){
    this.newsService.removeNews(id).subscribe(
      data => {
        if (data.success){
          for (var i = 0; i < this.news.length; i++){
            if(this.news[i]._id == id){
              this.news.splice(i,1);
            }
          }
        }
      }
    )
  }

  fillInputs(id){
    for (var i = 0; i < this.news.length; i++){
      if(this.news[i]._id == id){
        this.id = this.news[i]._id;
        this.title = this.news[i].title;
        this.description = this.news[i].description;
        this.url = this.news[i].url;
        this.img = this.news[i].img;
        break;
      }
    }
  }

  updateNews(){
    var updateNews = {
      id: this.id,
      title: this.title,
      desc: this.description,
      url: this.url,
      img: this.img
    }


    this.newsService.updateNews(updateNews).subscribe(
      data => {
        if(data.success){
          for (var i=0; i < this.news.length; i++){
            if(this.news[i]._id == this.id){
              this.news[i].title = this.title;
              this.news[i].description = this.description;
              this.news[i].url = this.url;
              this.news[i].img = this.img;
            }
          }
          alert('Success on Update');
        }else{
          alert('Something went wrong');
        }

      }
    )
  }

}
