import { ObjectId } from "mongodb";

export interface EventRSVP{
  eventID: Number;
  // eventID: ObjectId;
  rollCallNum: Number;
}
