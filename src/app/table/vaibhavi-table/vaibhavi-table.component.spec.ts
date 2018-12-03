import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaibhaviTableComponent } from './vaibhavi-table.component';

describe('VaibhaviTableComponent', () => {
  let component: VaibhaviTableComponent;
  let fixture: ComponentFixture<VaibhaviTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaibhaviTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaibhaviTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
