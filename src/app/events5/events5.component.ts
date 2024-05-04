import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Event } from '../event.model';
import { EventRSVP } from '../eventRSVP.model';
import { EventService } from '../event.service';

import { MatDialog } from '@angular/material/dialog';
import { EventBubble6Component } from '../event-bubble6/event-bubble6.component';

@Component({
  selector: 'app-events5',
  templateUrl: './events5.component.html',
  styleUrl: './events5.component.css'
})
export class Events5Component implements OnInit, OnDestroy {
  events: Event[]=[];
  rsvps: EventRSVP[]=[];
  private eventsSub: Subscription;
  // eventService: EventService;

  constructor(private dialog: MatDialog, public eventService: EventService) {}

  openDialog() {
    this.dialog.open(EventBubble6Component);
  }

  ngOnInit(): void {
    this.eventsSub = this.eventService.getEventsUpdateListener().subscribe((events: Event[])=>{
      this.events = events;
    })
    this.eventService.getEvents()
  }

  ngOnDestroy(): void {

  }
}
