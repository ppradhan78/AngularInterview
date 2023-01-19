import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInDirectiveComponent } from './build-in-directive.component';

describe('BuildInDirectiveComponent', () => {
  let component: BuildInDirectiveComponent;
  let fixture: ComponentFixture<BuildInDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
