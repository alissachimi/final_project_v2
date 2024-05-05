import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<{ message: string, members: any[] }>('https://c6e1-153-33-12-25.ngrok-free.app/api/members')
      .pipe(
        map(response => response.members.map(member => ({
          _id: member._id ? member._id.$oid : member._id,
          roll_call: member.roll_call,
          first_name: member.first_name,
          last_name: member.last_name,
          image: member.image,
          position: member.position,
          title: member.title
        })))
      );
  }


}
