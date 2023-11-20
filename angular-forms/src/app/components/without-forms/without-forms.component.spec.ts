import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutFormsComponent } from './without-forms.component';

describe('WithoutFormsComponent', () => {
  let component: WithoutFormsComponent;
  let fixture: ComponentFixture<WithoutFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithoutFormsComponent]
    });
    fixture = TestBed.createComponent(WithoutFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
