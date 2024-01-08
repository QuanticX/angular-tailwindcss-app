import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontDirectivesComponent } from './font-directives.component';

describe('FontDirectivesComponent', () => {
  let component: FontDirectivesComponent;
  let fixture: ComponentFixture<FontDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
