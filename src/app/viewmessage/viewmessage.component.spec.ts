import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmessageComponent } from './viewmessage.component';

describe('ViewmessageComponent', () => {
  let component: ViewmessageComponent;
  let fixture: ComponentFixture<ViewmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmessageComponent]
    });
    fixture = TestBed.createComponent(ViewmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});