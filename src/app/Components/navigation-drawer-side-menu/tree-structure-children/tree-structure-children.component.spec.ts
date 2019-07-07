import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeStructureChildrenComponent } from './tree-structure-children.component';

describe('TreeStructureChildrenComponent', () => {
  let component: TreeStructureChildrenComponent;
  let fixture: ComponentFixture<TreeStructureChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeStructureChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeStructureChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
