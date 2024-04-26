import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

import { Post } from './discussion.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private posts: Post[] = [];
  private postUpDate = new Subject<Post[]>()
  constructor(private http: HttpClient){}

  getPosts(){
    this.http.get<{message: string, posts:
    Post[]}>('http://localhost:3000/api/posts').
    subscribe((postData)=>{
      this.posts = postData.posts;
      //sends a copy of the data
      this.postUpDate.next([...this.posts]);
    });
  }

  getPostUpdateListener(){
      //can keep as private, but still keep it updated with current info
      return this.postUpDate.asObservable();
  }

  addPost(id:number, author: string, title: string, content: string, date: Date){
      const post: Post = {id:id, author: author, title: title, content:content, date:date};
      this.posts.push(post);
      this.postUpDate.next([...this.posts]);

  }
}
