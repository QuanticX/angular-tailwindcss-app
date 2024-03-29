import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPositionComponent } from './display-position.component';

describe('DisplayPositionComponent', () => {
  let component: DisplayPositionComponent;
  let fixture: ComponentFixture<DisplayPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
