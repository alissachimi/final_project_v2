import { Component } from '@angular/core';
import { Post } from '../discussion.model';
import { DiscussionService } from '../discussion.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-discussion-input3',
  templateUrl: './discussion-input3.component.html',
  styleUrl: './discussion-input3.component.css'
})
export class DiscussionInput3Component {
  currentId=1;
  enteredText="";

  constructor(public discussionService: DiscussionService){

  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }

    this.discussionService.addPost(this.currentId, null, form.value.title, form.value.content, null, null);
    form.resetForm();
    this.currentId++
  }
}
