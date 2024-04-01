import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPage3Component } from './work-page3.component';

describe('WorkPage3Component', () => {
  let component: WorkPage3Component;
  let fixture: ComponentFixture<WorkPage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkPage3Component]
    });
    fixture = TestBed.createComponent(WorkPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
