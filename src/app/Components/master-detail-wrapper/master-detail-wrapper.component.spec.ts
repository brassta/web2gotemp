import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailWrapperComponent } from './master-detail-wrapper.component';

describe('MasterDetailWrapperComponent', () => {
  let component: MasterDetailWrapperComponent;
  let fixture: ComponentFixture<MasterDetailWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
