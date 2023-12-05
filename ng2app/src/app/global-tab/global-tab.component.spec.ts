import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTabComponent } from './global-tab.component';

describe('GlobalTabComponent', () => {
  let component: GlobalTabComponent;
  let fixture: ComponentFixture<GlobalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
