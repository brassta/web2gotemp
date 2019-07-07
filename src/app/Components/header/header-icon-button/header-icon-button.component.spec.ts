import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconButtonComponent } from './header-icon-button.component';

describe('HeaderIconButtonComponent', () => {
  let component: HeaderIconButtonComponent;
  let fixture: ComponentFixture<HeaderIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
