import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFinalizationDialogComponent } from './shop-finalization-dialog.component';

describe('ShopFinalizationDialogComponent', () => {
  let component: ShopFinalizationDialogComponent;
  let fixture: ComponentFixture<ShopFinalizationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFinalizationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFinalizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
