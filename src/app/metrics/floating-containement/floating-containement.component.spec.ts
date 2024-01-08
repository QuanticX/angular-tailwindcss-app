import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingContainementComponent } from './floating-containement.component';

describe('FloatingContainementComponent', () => {
  let component: FloatingContainementComponent;
  let fixture: ComponentFixture<FloatingContainementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingContainementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingContainementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
