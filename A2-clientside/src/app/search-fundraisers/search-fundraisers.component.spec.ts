import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFundraisersComponent } from './search-fundraisers.component';

describe('SearchFundraisersComponent', () => {
  let component: SearchFundraisersComponent;
  let fixture: ComponentFixture<SearchFundraisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFundraisersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFundraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
