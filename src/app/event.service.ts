import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { Event } from './event.model';
import { EventRSVP } from './eventRSVP.model';

import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { ObjectId } from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[]=[];
  private rsvps: EventRSVP[]=[];
  private eventUpDate = new Subject<Event[]>()

  constructor(private http: HttpClient) { }

  // get the updated events array ?
  getEvents() {
    this.http.get<{ message: string, events: any[] }>('http://localhost:3000/api/events')
    .pipe(
      map(response => response.events.map(events => ({
        // _id: events._id,
        eventID: events.eventID,
        eventChair: events.eventChair,
        eventName: events.eventName,
        eventDate: events.eventDate,
        details: events.details,
        rsvpCount: events.rsvpCount
      })))
    ).subscribe((transformedEvent)=>{
      this.events = transformedEvent;
      this.eventUpDate.next([...this.events]);
    })
  }
  getEventsUpdateListener(){
    return this.eventUpDate.asObservable();
  }

  // share updated events array with subscribers?
  // getEventRSVPsUpdateListener(){ }

  // increment eventCount if RSVP is valid
    // maybe create method to check for validity
  // this will initially be empty! adding to upon form submission
  addEventRSVP(eventID: ObjectId, rollCallNum: Number){
    // get roll call num from form input but idk how to define that here
    // const rsvp: EventRSVP = {eventID: eventID, rollCallNum: rollCallNum};
    // add more
  }
}
