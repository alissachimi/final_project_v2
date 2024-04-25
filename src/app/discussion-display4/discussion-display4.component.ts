import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Post } from '../discussion.model';
import { DiscussionService } from '../discussion.service';

import { Subscription } from 'rxjs';
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
  @ViewChild('postContainer') postContainer: ElementRef;


  constructor(public discussionService: DiscussionService){

  }

  ngOnInit(): void {
      this.scrollToBottom();
      this.postsSub = this.discussionService.getPostUpdateListener().subscribe((posts: Post[])=>{
        this.scrollToBottom();
        this.posts = posts;
        this.scrollToBottom();
      })
      this.discussionService.getPosts();
      this.scrollToBottom();

  }


  ngOnDestroy(): void {
      this.scrollToBottom();
      this.postsSub.unsubscribe();
      this.scrollToBottom();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.postContainer.nativeElement.scrollTop = this.postContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
