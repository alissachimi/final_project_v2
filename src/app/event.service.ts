import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

import { Event } from './event.model';
import { EventRSVP } from './eventRSVP.model';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[]=[];
  private eventUpDate = new Subject<Event[]>()

  constructor(private http: HttpClient) { }

  // get the updated events array ?
  // getEventRSVPs(){ }

  // share updated events array with subscribers?
  // getEventRSVPsUpdateListener(){ }

  // increment eventCount if RSVP is valid ?
  // addEventRSVP(){ }
}
