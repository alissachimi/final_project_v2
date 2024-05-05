import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { ModelService } from '../member.service';

@Component({
  selector: 'app-exec2',
  templateUrl: './exec2.component.html',
  styleUrls: ['./exec2.component.css']
})
export class Exec2Component implements OnInit {
  members: Member[] = [];

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.modelService.getMembers().subscribe(members => {
      this.members = members.filter(member => member.position === 'exec')
        // Sort filtered members by roll call number in ascending order
        .sort((a, b) => a.roll_call - b.roll_call);
    });
  }

  toggleImageSize(member): void {  }
  
}
