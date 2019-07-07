import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDrawerSideMenuComponent } from './navigation-drawer-side-menu.component';

describe('NavigationDrawerSideMenuComponent', () => {
  let component: NavigationDrawerSideMenuComponent;
  let fixture: ComponentFixture<NavigationDrawerSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationDrawerSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDrawerSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
