import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingTypographyComponent } from './spacing-typography.component';

describe('SpacingTypographyComponent', () => {
  let component: SpacingTypographyComponent;
  let fixture: ComponentFixture<SpacingTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacingTypographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpacingTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
