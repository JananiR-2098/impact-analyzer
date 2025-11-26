
import { TestBed } from '@angular/core/testing';
import { Sharedservice } from './sharedservice';

describe('Sharedservice', () => {
  let service: Sharedservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharedservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit data via openPanelold', (done) => {
    const testMsg = [
  { sender: 'user' as 'user', text: 'Hello', timestamp: new Date() }
];
    service.panelData$.subscribe(data => {
      expect(data).toEqual(testMsg);
      done();
    });
    service.openPanelold(testMsg);
  });

  it('should emit data via openPanel', (done) => {
    const testData = { graphData: [], testPlan: 'plan' };
    service.panelData$.subscribe(data => {
      expect(data).toEqual(testData);
      done();
    });
    service.openPanel(testData);
  });
});
