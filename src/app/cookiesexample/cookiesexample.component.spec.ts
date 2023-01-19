import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesexampleComponent } from './cookiesexample.component';

describe('CookiesexampleComponent', () => {
  let component: CookiesexampleComponent;
  let fixture: ComponentFixture<CookiesexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
