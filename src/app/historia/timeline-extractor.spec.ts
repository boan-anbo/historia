import { TestBed } from '@angular/core/testing';
import {TimelineExtractor} from './timeline-extractor';



describe('Extractor', () => {


  it('should be parse number', () => {
    // @ts-ignore
    expect(TimelineExtractor.ParseNum('８')).toBe(8);
  });
});
