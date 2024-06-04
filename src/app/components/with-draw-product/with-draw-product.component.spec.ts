import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDrawProductComponent } from './with-draw-product.component';

describe('WithDrawProductComponent', () => {
  let component: WithDrawProductComponent;
  let fixture: ComponentFixture<WithDrawProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithDrawProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithDrawProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
