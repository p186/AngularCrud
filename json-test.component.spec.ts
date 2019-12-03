import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTestComponent } from './json-test.component';

describe('JsonTestComponent', () => {
  let component: JsonTestComponent;
  let fixture: ComponentFixture<JsonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
