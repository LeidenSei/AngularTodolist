import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressColorComponent } from './progress-color.component';

describe('ProgressColorComponent', () => {
  let component: ProgressColorComponent;
  let fixture: ComponentFixture<ProgressColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressColorComponent]
    });
    fixture = TestBed.createComponent(ProgressColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
