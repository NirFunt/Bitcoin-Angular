import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTvComponent } from './chart-tv.component';

describe('ChartTVComponent', () => {
  let component: ChartTvComponent;
  let fixture: ComponentFixture<ChartTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
