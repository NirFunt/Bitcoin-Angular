import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMpComponent } from './chart-mp.component';

describe('ChartMpComponent', () => {
  let component: ChartMpComponent;
  let fixture: ComponentFixture<ChartMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
