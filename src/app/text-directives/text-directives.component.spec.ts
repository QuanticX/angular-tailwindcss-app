import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDirectivesComponent } from './text-directives.component';

describe('TextDirectivesComponent', () => {
  let component: TextDirectivesComponent;
  let fixture: ComponentFixture<TextDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
