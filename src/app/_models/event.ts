export class EventItem {
  public eventId: string = '';
  public eventStatus: number = 0;
  public eventName: string = '';
  public artist: string = '';
  public eventStart: number = 0;
  public eventDurationHours: number = 0;
  public hall: number = 0;
  public eventType: number = 0;
  public description: string = '';
  public images: string[] = [];
  public priceRanges: [] = [];
  public managers: string = '';

  constructor (
    eventId: string,
    eventStatus: number,
    eventName: string,
    artist: string,
    eventStart: number,
    eventDurationHours: number,
    hall: number,
    eventType: number,
    description: string,
    images: string[],
    priceRanges: [],
    managers: string
  ) {
    this.eventId = eventId;
    this.eventStatus = eventStatus;
    this.eventName = eventName;
    this.artist = artist;
    this.eventStart = eventStart;
    this.eventDurationHours = eventDurationHours;
    this.hall = hall;
    this.eventType = eventType;
    this.description = description;
    this.images = images;
    this.priceRanges = priceRanges;
    this.managers = managers;
  }

  public static fromJSON(json: any): EventItem {
    return new EventItem(
      json.eventId,
      json.eventStatus,
      json.eventName,
      json.artist,
      json.eventStart,
      json.eventDurationHours,
      json.hall,
      json.eventType,
      json.description,
      json.images,
      json.priceRanges,
      json.managers
    );
  }
}
