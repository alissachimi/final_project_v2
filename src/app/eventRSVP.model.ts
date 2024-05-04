import { ObjectId } from "mongodb";

export interface EventRSVP{
  // id: Number;
  eventID: ObjectId;
  rollCallNum: Number;
}
