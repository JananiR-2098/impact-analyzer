
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Chatservice } from './chatservice';

describe('Chatservice', () => {
  let service: Chatservice;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Chatservice]
    });
    service = TestBed.inject(Chatservice);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send message to backend', () => {
    const testMsg = 'hello';
    service.sendToBackend(testMsg).subscribe(response => {
      expect(response).toEqual({ result: 'ok' });
    });
    const req = httpMock.expectOne('http://localhost:8080/api/chat/impactanalyser');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ text: testMsg });
    req.flush({ result: 'ok' });
  });

  it('should get prompt response', () => {
    const testMsg = 'test';
    const mockResponse = { graphs: [], testPlan: { title: 't', testPlan: 'plan' } };
    service.getPromptResponse(testMsg).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne('http://localhost:8080/api/chat/impactanalyser?sessionId=131242');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ text: testMsg });
    req.flush(mockResponse);
  });
});
