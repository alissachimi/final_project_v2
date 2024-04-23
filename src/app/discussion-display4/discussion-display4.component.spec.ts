import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionDisplay4Component } from './discussion-display4.component';

describe('DiscussionDisplay4Component', () => {
  let component: DiscussionDisplay4Component;
  let fixture: ComponentFixture<DiscussionDisplay4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscussionDisplay4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionDisplay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
