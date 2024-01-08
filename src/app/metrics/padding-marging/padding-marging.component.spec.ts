import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingMargingComponent } from './padding-marging.component';

describe('PaddingMargingComponent', () => {
  let component: PaddingMargingComponent;
  let fixture: ComponentFixture<PaddingMargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaddingMargingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaddingMargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
