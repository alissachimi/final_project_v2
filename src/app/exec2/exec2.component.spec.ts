import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exec2Component } from './exec2.component';

describe('Exec2Component', () => {
  let component: Exec2Component;
  let fixture: ComponentFixture<Exec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exec2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
