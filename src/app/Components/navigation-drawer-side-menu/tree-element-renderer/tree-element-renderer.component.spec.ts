import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeElementRendererComponent } from './tree-element-renderer.component';

describe('TreeElementRendererComponent', () => {
  let component: TreeElementRendererComponent;
  let fixture: ComponentFixture<TreeElementRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeElementRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeElementRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
