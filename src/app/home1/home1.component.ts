import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit, OnDestroy {
  events: Event[] = [];
  private eventsSub: Subscription;

  constructor(private eventService: EventService) {}

  //fetches events
  ngOnInit(): void {
    this.eventsSub = this.eventService.getEventsUpdateListener()
      .subscribe((events: Event[]) => {
        this.events = events;
      });
    this.eventService.getEvents();
  }

  ngOnDestroy(): void {
    this.eventsSub.unsubscribe(); // Unsubscribe to prevent memory leaks
  }
}
