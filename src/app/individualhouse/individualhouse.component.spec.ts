import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualhouseComponent } from './individualhouse.component';

describe('IndividualhouseComponent', () => {
  let component: IndividualhouseComponent;
  let fixture: ComponentFixture<IndividualhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
