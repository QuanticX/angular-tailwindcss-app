import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStylesComponent } from './list-styles.component';

describe('ListStylesComponent', () => {
  let component: ListStylesComponent;
  let fixture: ComponentFixture<ListStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStylesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
