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
  //private rsvps: EventRSVP[]=[];
  private lastRSVP: {
    name: String,
    event: String
  }

  private eventUpDate = new Subject<Event[]>()
  private eventRSVPUpDate = new Subject<any>()

  constructor(private http: HttpClient) {
    this.lastRSVP = {name: '', event: ''}
   }

  // get the updated events array
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

  // share updated events array with subscribers
  getEventRSVPsUpdateListener(){
    return this.eventRSVPUpDate.asObservable();
  }

  // this will initially be empty! adding items upon form submission
  addEventRSVP(eventID: Number, rollCallNum: Number){
    // get roll call num from form input via onAddEventRSVP() in .ts file
    const rsvp: EventRSVP = {eventID: eventID, rollCallNum: rollCallNum};

    this.http.post<{message:string, name: string, event: string}>('http://localhost:3000/api/eventsRSVP', rsvp)
    .subscribe((responseData)=>{
      console.log('here is the response data !!!!!!!!!!!!!!!!!', responseData)
      this.lastRSVP.name = responseData.name
      this.lastRSVP.event = responseData.event
      this.eventRSVPUpDate.next(this.lastRSVP);
    })
  }
}
