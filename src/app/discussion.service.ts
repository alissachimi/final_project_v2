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
          author: post.author,
          title: post.title,
          content: post.content,
          date: post.date
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

  addPost(id:number, author: string, title: string, content: string, date: string){
      const post: Post = {id:id, author: 'alissa', title: title, content:content, date:date};
      this.http.post<{message:string, postId: number}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData)=>{
        const id = responseData.postId
        post.id = id
        this.posts.push(post);
        this.postUpDate.next([...this.posts]);
      })
  }
}
