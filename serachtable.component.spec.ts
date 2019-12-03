import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachtableComponent } from './serachtable.component';

describe('SerachtableComponent', () => {
  let component: SerachtableComponent;
  let fixture: ComponentFixture<SerachtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
