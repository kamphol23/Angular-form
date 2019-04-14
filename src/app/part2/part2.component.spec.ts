import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { part2Component } from './part2.component';

describe('part2Component', () => {
  let component: part2Component;
  let fixture: ComponentFixture<part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
