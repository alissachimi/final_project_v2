import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events5Component } from './events5.component';

describe('Events5Component', () => {
  let component: Events5Component;
  let fixture: ComponentFixture<Events5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Events5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Events5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
