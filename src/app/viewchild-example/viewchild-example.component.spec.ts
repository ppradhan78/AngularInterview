import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildExampleComponent } from './viewchild-example.component';

describe('ViewchildExampleComponent', () => {
  let component: ViewchildExampleComponent;
  let fixture: ComponentFixture<ViewchildExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
