import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAlignementComponent } from './box-alignement.component';

describe('BoxAlignementComponent', () => {
  let component: BoxAlignementComponent;
  let fixture: ComponentFixture<BoxAlignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxAlignementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxAlignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
