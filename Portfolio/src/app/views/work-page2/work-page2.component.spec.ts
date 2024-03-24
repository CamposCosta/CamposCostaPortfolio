import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPage2Component } from './work-page2.component';

describe('WorkPage2Component', () => {
  let component: WorkPage2Component;
  let fixture: ComponentFixture<WorkPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkPage2Component]
    });
    fixture = TestBed.createComponent(WorkPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
