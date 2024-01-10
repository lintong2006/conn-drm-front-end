import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateArtComponent } from './donate-art.component';

describe('DonateArtComponent', () => {
  let component: DonateArtComponent;
  let fixture: ComponentFixture<DonateArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
