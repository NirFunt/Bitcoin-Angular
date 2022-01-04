import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAbComponent } from './chart-ab.component';

describe('ChartAbComponent', () => {
  let component: ChartAbComponent;
  let fixture: ComponentFixture<ChartAbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
