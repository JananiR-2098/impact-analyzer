import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPrompt } from './chat-prompt';

describe('ChatPrompt', () => {
  let component: ChatPrompt;
  let fixture: ComponentFixture<ChatPrompt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatPrompt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatPrompt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
