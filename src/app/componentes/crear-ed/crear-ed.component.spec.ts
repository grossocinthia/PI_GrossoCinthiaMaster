import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEdComponent } from './crear-ed.component';

describe('CrearEdComponent', () => {
  let component: CrearEdComponent;
  let fixture: ComponentFixture<CrearEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
