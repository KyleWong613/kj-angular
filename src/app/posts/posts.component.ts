import { Component, VERSION, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  private jsonapi = 'https://jsonplaceholder.typicode.com/posts';
    posts: Posts[] = [];
    totalposts: any;
    selectedId: any;
    selectedPost: any;
    name = 'Angular ' + VERSION.major;
    constructor(private http: HttpClient) {}
    ngOnInit() {
      this.getAllPost();
    }

    getAllPost(): void {
      this.http.get<Posts[]>(this.jsonapi).subscribe(
        (data) => {
          this.posts = data;
          const dataMapper: { [userId: number]: number } = {};

          for (const post of data) {
            dataMapper[post.userId] = (dataMapper[post.userId] || 0) + 1;
          }
          this.totalposts = dataMapper;
          console.log(this.posts);
        },
        (error) => {
          console.log('nothing');
        }
      );
    }

    // getPostCounter(userId: number): number {
    //   return this.totalposts.filter((p) => p.userId === userId).length;
    // }

    showPost(userId: number): void {
      this.selectedId = userId;
      this.selectedPost = this.posts;
    }
  }
