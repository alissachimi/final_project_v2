import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Event } from '../event.model';
import { EventRSVP } from '../eventRSVP.model';
import { EventService } from '../event.service';

import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '0', // Distance from top of the viewport
      right: '0', // Distance from right of the viewport
    };
    dialogConfig.hasBackdrop = false; // Disable backdrop
    this.dialog.open(EventBubble6Component, dialogConfig);
  }

  onAddEventRSVP(form: NgForm, eventID: Number){
    if(form.invalid){
      return;
    }

    this.eventService.addEventRSVP(eventID, form.value.rollCallNum);
    
    form.resetForm();
    this.openDialog();
  }

  ngOnInit(): void {
    this.eventsSub = this.eventService.getEventsUpdateListener().subscribe((events: Event[])=>{
      this.events = events;
    })
    this.eventService.getEvents()
  }

  ngOnDestroy(): void {
    this.eventsSub.unsubscribe();
  }
}
