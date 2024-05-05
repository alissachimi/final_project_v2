import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription} from 'rxjs';
import {EventService} from '../event.service'

@Component({
  selector: 'app-event-bubble6',
  templateUrl: './event-bubble6.component.html',
  styleUrl: './event-bubble6.component.css'
})
export class EventBubble6Component {
  private rsvpSub: Subscription;
  constructor(private dialog: MatDialog, public eventService: EventService) {}

  name = '';
  event = '';

  ngOnInit(): void {
    this.rsvpSub = this.eventService.getEventRSVPsUpdateListener().subscribe((lastRSVP: any)=>{
      this.name = lastRSVP.name;
      this.event = lastRSVP.event;
    })

}


ngOnDestroy(): void {
    this.rsvpSub.unsubscribe();
}

}
