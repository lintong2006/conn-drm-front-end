import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuyArtComponent } from './page-buy-art.component';

describe('PageBuyArtComponent', () => {
  let component: PageBuyArtComponent;
  let fixture: ComponentFixture<PageBuyArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBuyArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBuyArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
