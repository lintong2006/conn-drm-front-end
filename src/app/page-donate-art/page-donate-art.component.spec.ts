import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDonateArtComponent } from './page-donate-art.component';

describe('PageDonateArtComponent', () => {
  let component: PageDonateArtComponent;
  let fixture: ComponentFixture<PageDonateArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDonateArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDonateArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
