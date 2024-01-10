import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoinUsComponent } from './page-join-us.component';

describe('PageJoinUsComponent', () => {
  let component: PageJoinUsComponent;
  let fixture: ComponentFixture<PageJoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageJoinUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageJoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
