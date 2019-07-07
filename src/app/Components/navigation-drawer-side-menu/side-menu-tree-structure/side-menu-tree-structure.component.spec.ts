import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuTreeStructureComponent } from './side-menu-tree-structure.component';

describe('SideMenuTreeStructureComponent', () => {
  let component: SideMenuTreeStructureComponent;
  let fixture: ComponentFixture<SideMenuTreeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuTreeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuTreeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
