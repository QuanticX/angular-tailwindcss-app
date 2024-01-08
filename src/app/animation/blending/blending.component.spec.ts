import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendingComponent } from './blending.component';

describe('BlendingComponent', () => {
  let component: BlendingComponent;
  let fixture: ComponentFixture<BlendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
