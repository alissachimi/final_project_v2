import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../discussion.model';
import { DiscussionService } from '../discussion.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-discussion-display4',
  templateUrl: './discussion-display4.component.html',
  styleUrl: './discussion-display4.component.css'
})
export class DiscussionDisplay4Component implements OnInit, OnDestroy {
  posts:Post[]=[];
  private postsSub: Subscription;

  constructor(public discussionService: DiscussionService){

  }

  ngOnInit(): void {

      this.postsSub = this.discussionService.getPostUpdateListener().subscribe((posts: Post[])=>{
        this.posts = posts;
      })
      this.discussionService.getPosts();
  }


  ngOnDestroy(): void {
      this.postsSub.unsubscribe();
  }
}
