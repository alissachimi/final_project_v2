import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventBubble6Component } from '../event-bubble6/event-bubble6.component';

@Component({
  selector: 'app-events5',
  templateUrl: './events5.component.html',
  styleUrl: './events5.component.css'
})
export class Events5Component {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EventBubble6Component);
  }
}
