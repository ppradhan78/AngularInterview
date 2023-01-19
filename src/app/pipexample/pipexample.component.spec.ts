import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipexampleComponent } from './pipexample.component';

describe('PipexampleComponent', () => {
  let component: PipexampleComponent;
  let fixture: ComponentFixture<PipexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
