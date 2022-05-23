import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExComponent } from './crear-ex.component';

describe('CrearExComponent', () => {
  let component: CrearExComponent;
  let fixture: ComponentFixture<CrearExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
