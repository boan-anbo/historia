
import {Time} from '@angular/common';
import {TimeDetailLevel, TimelineEvent} from './timeline-extractor';

export class Timeline {
  rawTimelineEvents: TimelineEvent[];
  private tokenizedInputSentences: string[];
  chronology: Chronology;

  constructor(timelineEvents: TimelineEvent[], tokenizedInputSentences: string[]) {
    this.rawTimelineEvents = timelineEvents;
    this.tokenizedInputSentences = tokenizedInputSentences;
    this.LoadChronology(timelineEvents);
  }

  LoadChronology(timelineEvents: TimelineEvent[]): void {
    this.chronology  = new Chronology(timelineEvents);
  }

  GetChronology(): Chronology {
    return this.chronology;
  }
}


export class Chronology {
  metaData: string;
  private yearEvents: YearEvent [] = [];
  constructor(timelineEvents: TimelineEvent[]) {
    timelineEvents.forEach((event) => {
      this.AddEvent(event);
    });
    this.SortAllEventsByOrder('aTOz', 'aTOz', 'aTOz');

  }

  private SortAllEventsByOrder(yearOrder: SortOrder, monthOrder: SortOrder, dayOrder: SortOrder): void {
    this.yearEvents.forEach((yearEvent, yearIndex) => {
      yearEvent.monthEvents.forEach((monthEvent, monthIndex) => {
        this.yearEvents[yearIndex].monthEvents[monthIndex].dayEvents = Util.SortArrayByObjectProperty<DayEvent>(monthEvent.dayEvents, 'day', dayOrder);
      })
      this.yearEvents[yearIndex].monthEvents = Util.SortArrayByObjectProperty<MonthEvent>(yearEvent.monthEvents, 'month', monthOrder)
    })
    this.yearEvents = Util.SortArrayByObjectProperty<YearEvent>(this.yearEvents, 'year', yearOrder);

  }


  public GetEventsByYear(): YearEvent[] {
    return this.yearEvents;
  }

  private GetYearEvent(year: number): YearEvent {
    return this.yearEvents.find(yearEvent => yearEvent.year === year);
  }

  private GetYearMonth(year: number, month: number): MonthEvent {
    const yearEvent = this.GetYearEvent(year);
    if (yearEvent) {
      return yearEvent.GetMonthEvent(month);
    } else {
      return null;
    }
  }

  private   GetYearMonthDay(year: number, month: number, day): DayEvent {
    const monthEvent = this.GetYearMonth(year, month);
    if (monthEvent) {
      return monthEvent.GetDayEvent(day);
    } else {
      return null;
    }
  }


  private AddEvent(event: TimelineEvent): TimelineEvent | null {
    const time = event.eventTime;

    switch (event.timeDetailLevel()){
      case TimeDetailLevel.day:
        return this.AddDayEvent(event);

      case TimeDetailLevel.month:
        return this.AddMonthEvent(event);

      case TimeDetailLevel.year:
        return this.AddYearEvent(event);
      default:
        return null;

    }
  }
  private MakeSureYearIsNotEmpty(year: number): void {

    if (!this.GetYearEvent(year)) {
      const newYear = new YearEvent(year);
      this.yearEvents.push(newYear);
    }
  }
  private MakeSureYearMonthIsNotEmpty(year: number, month: number): void {
    this.MakeSureYearIsNotEmpty(year);
    if (!this.GetYearMonth(year, month)) {
      const newMonth = new MonthEvent(month);
      const yearIndex = this.GetYearIndex(year);
      this.yearEvents[yearIndex].monthEvents.push(newMonth);
    }
  }

  private MakeSureYearMonthDayIsNotEmpty(year: number, month: number, day: number): void {
    this.MakeSureYearMonthIsNotEmpty(year, month);
    if (!this.GetYearMonthDay(year, month, day)) {
      const newDay = new DayEvent(day);
      const [yearIndex, monthIndex] = this.GetYearMonthIndex(year, month);
      this.yearEvents[yearIndex].monthEvents[monthIndex].dayEvents.push(newDay);
    }
  }

  private GetYearIndex(year: number): YearIndex {
    console.log('Year to looking for', year);
    console.log('year retrieved', this.GetYearEvent(year));
    return this.yearEvents.indexOf(this.GetYearEvent(year));
  }

  private GetYearMonthIndex(year: number, month: number): [YearIndex, MonthIndex] {
    const yearIndex = this.GetYearIndex(year);
    return [yearIndex, this.yearEvents[yearIndex].monthEvents.indexOf(this.GetYearMonth(year, month))];
  }

  private GetYearMonthDayIndex(year: number, month: number, day: number): [YearIndex, MonthIndex, DayIndex] {
    const [yearIndex, monthIndex] = this.GetYearMonthIndex(year, month);
    return [
      yearIndex,
      monthIndex,
      this.yearEvents[yearIndex].monthEvents[monthIndex].dayEvents.indexOf(this.GetYearMonthDay(year, month, day))
    ];
  }
  private   AddDayEvent(event: TimelineEvent): TimelineEvent {
    const time = event.eventTime;
    this.MakeSureYearMonthDayIsNotEmpty(time.year, time.month, time.day);
    const [yearIndex, monthIndex, dayIndex] = this.GetYearMonthDayIndex(time.year, time.month, time.day);
    this.yearEvents[yearIndex].monthEvents[monthIndex].dayEvents[dayIndex].dayEvents.push(event);
    return event;
  }
  private  AddMonthEvent(event: TimelineEvent): TimelineEvent {
    const time = event.eventTime;
    this.MakeSureYearMonthIsNotEmpty(time.year, time.month);
    const [yearIndex, monthIndex] = this.GetYearMonthIndex(time.year, time.month);
    this.yearEvents[yearIndex].monthEvents[monthIndex].monthEventsWithoutDay.push(event);
    return event;
  }

  private   AddYearEvent(event: TimelineEvent): TimelineEvent {
    const time = event.eventTime;

    this.MakeSureYearIsNotEmpty(time.year);
    const yearIndex = this.GetYearIndex(time.year);
    console.log(yearIndex);
    this.yearEvents[yearIndex].yearEventsWithoutMonthDay.push(event);
    return event;
  }
}

export type YearIndex = number;
export type MonthIndex = number;
export type DayIndex = number;

export class YearEvent {
  year: number;
  yearEventsWithoutMonthDay: TimelineEvent[] = [];
  monthEvents: MonthEvent[] = [];
  constructor(year: number) {
    this.year = year;
  }

  GetMonthEvent(month: number): MonthEvent {
    return this.monthEvents.find(monthEvent => monthEvent.month === month);
  }

}

export class MonthEvent {
  month: number;
  monthEventsWithoutDay: TimelineEvent[] = [];
  dayEvents: DayEvent[] = [];
  constructor(month: number)  {
    this.month = month;
  }

  GetDayEvent(day: number): DayEvent {
    return this.dayEvents.find(dayEvent => dayEvent.day === day);
  }
}

export class DayEvent {
  day: number;
  dayEvents: TimelineEvent[] = [];
  constructor(day: number) {
    this.day = day;
  }

}


export const Util = {
  SortArrayByObjectProperty : <T>(
    inputArray: T[],
    propertyName: ObjectPropertyName,
    order: SortOrder
  ): T[] => {

    let filteredInputArray = inputArray.filter((resultItem) =>
      {
        if (!resultItem[propertyName]) {
          console.error(`Problematic Input Data`, resultItem, `does not have the property of '${propertyName}'`);
          return false;
        } else if (typeof resultItem[propertyName] !== 'number') {
          console.error(`Problematic Input Data Property '${propertyName}' ${resultItem[propertyName]} is not numerical`);
          return false;
        } else {
          return true;
        }
    });

    filteredInputArray = filteredInputArray.sort((a, b) => {

      const aValue = a[propertyName];
      const bValue = b[propertyName];
      switch (order) {
        case 'zToA':
          return aValue < bValue ? 1 : -1;
        case 'aTOz':
          return aValue > bValue ? 1 : -1;
      }
    });
    return filteredInputArray;
  }
};

type SortOrder = 'zToA' | 'aTOz';
type ObjectPropertyName = string;
