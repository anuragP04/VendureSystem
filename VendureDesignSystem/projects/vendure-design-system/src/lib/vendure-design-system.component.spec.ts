import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendureDesignSystemComponent } from './vendure-design-system.component';

describe('VendureDesignSystemComponent', () => {
  let component: VendureDesignSystemComponent;
  let fixture: ComponentFixture<VendureDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendureDesignSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendureDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
