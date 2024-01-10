import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsContainerComponent } from './arts-container.component';

describe('ArtsContainerComponent', () => {
  let component: ArtsContainerComponent;
  let fixture: ComponentFixture<ArtsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
