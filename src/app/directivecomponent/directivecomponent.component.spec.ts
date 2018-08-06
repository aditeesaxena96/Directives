import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivecomponentComponent } from './directivecomponent.component';

describe('DirectivecomponentComponent', () => {
  let component: DirectivecomponentComponent;
  let fixture: ComponentFixture<DirectivecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
