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

  getColspan(index: number): number {
    if (index === 1) { // Skip the middle grid tile on the top row
      return 2; // Set colspan to 2
    }
    return 1; // For all other tiles, set colspan to 1
  }

  ngOnInit(): void {
    this.modelService.getMembers().subscribe(members => {
      // Filter members by position 'exec'
      this.members = members.filter(member => member.position === 'exec')
                            // Sort filtered members by roll call number in ascending order
                            .sort((a, b) => a.roll_call - b.roll_call);
    });
  }

  // ngOnInit(): void {
  //   this.modelService.getMembers().subscribe(members => {
  //     this.members = members;
  //     console.log('Members:', this.members); // Log members to check if data is retrieved
  //   });
  // }
  
}
