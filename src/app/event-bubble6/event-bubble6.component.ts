import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event-bubble6',
  templateUrl: './event-bubble6.component.html',
  styleUrl: './event-bubble6.component.css'
})
export class EventBubble6Component {
  constructor(private dialog: MatDialog) {}
  name = 'Alissa Chimienti'
  event = 'Social #1'

}
