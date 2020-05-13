import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestableComponent } from './restable.component';

describe('RestableComponent', () => {
  let component: RestableComponent;
  let fixture: ComponentFixture<RestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
