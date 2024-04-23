import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionInput3Component } from './discussion-input3.component';

describe('DiscussionInput3Component', () => {
  let component: DiscussionInput3Component;
  let fixture: ComponentFixture<DiscussionInput3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscussionInput3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionInput3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
