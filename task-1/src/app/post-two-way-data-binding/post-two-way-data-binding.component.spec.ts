import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTwoWayDataBindingComponent } from './post-two-way-data-binding.component';

describe('PostTwoWayDataBindingComponent', () => {
  let component: PostTwoWayDataBindingComponent;
  let fixture: ComponentFixture<PostTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(PostTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
