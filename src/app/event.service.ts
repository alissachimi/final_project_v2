import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

import { Event } from './event.model';
import { EventRSVP } from './eventRSVP.model';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // define any variables
  constructor(private http: HttpClient) { }

  // getEventRSVPs(){ }

  // getEventRSVPsUpdateListener(){ }

  // addEventRSVP(){ }
}
