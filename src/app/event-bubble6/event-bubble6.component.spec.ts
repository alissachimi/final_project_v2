import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBubble6Component } from './event-bubble6.component';

describe('EventBubble6Component', () => {
  let component: EventBubble6Component;
  let fixture: ComponentFixture<EventBubble6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventBubble6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventBubble6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
