import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyresComponent } from './analyres.component';

describe('AnalyresComponent', () => {
  let component: AnalyresComponent;
  let fixture: ComponentFixture<AnalyresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
