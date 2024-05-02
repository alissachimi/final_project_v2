import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

import { Post } from './discussion.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private posts: Post[] = [];
  private postUpDate = new Subject<Post[]>()
  constructor(private http: HttpClient){}

  getPosts(){
    // this.http.get<{message: string, posts:
    // Post[]}>('http://localhost:3000/api/posts').
    // subscribe((postData)=>{
    //   this.posts = postData.posts;
    //   //sends a copy of the data
    //   this.postUpDate.next([...this.posts]);
    // });

    this.http.get<{message: string, posts:any}>('http://localhost:3000/api/posts')
    .pipe(map((postData)=>{
      return postData.posts.map(post=>{
        return {
          id:post.id,
          roll_call: post.roll_call,
          author: post.author,
          title: post.title,
          content: post.content,
          my_date: post.my_date
        }
      })
    })).subscribe((transformedPost)=>{
      this.posts = transformedPost;
      this.postUpDate.next([...this.posts]);
    })
  }

  getPostUpdateListener(){
      //can keep as private, but still keep it updated with current info
      return this.postUpDate.asObservable();
  }

  addPost(id:number, roll_call: number, title: string, content: string, date: string){
      const post: Post = {id:id, roll_call: roll_call, author:null, title: title, content:content, my_date:date};
      this.http.post<{message:string, postId: number, date: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData)=>{
        const id = responseData.postId
        post.id = id
        post.my_date = responseData.date
        this.posts.push(post);
        this.postUpDate.next([...this.posts]);
      })
  }
}
