import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCheckedComponent } from './remove-checked.component';

describe('RemoveCheckedComponent', () => {
  let component: RemoveCheckedComponent;
  let fixture: ComponentFixture<RemoveCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveCheckedComponent]
    });
    fixture = TestBed.createComponent(RemoveCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
