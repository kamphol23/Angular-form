import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { part1Component } from './part1.component';

describe('part1Component', () => {
  let component: part1Component;
  let fixture: ComponentFixture<part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
