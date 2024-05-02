import { Component, OnInit, OnDestroy} from '@angular/core';
import { Post } from '../discussion.model';
import { DiscussionService } from '../discussion.service';

import { Subscription} from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-discussion-display4',
  templateUrl: './discussion-display4.component.html',
  styleUrl: './discussion-display4.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20%)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0%)' }))
      ])
    ])
  ]
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
