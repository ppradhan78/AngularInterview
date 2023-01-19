import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstrogeComponent } from './webstroge.component';

describe('WebstrogeComponent', () => {
  let component: WebstrogeComponent;
  let fixture: ComponentFixture<WebstrogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstrogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstrogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
