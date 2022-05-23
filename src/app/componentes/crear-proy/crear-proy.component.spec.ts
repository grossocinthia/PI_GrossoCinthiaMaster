import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProyComponent } from './crear-proy.component';

describe('CrearProyComponent', () => {
  let component: CrearProyComponent;
  let fixture: ComponentFixture<CrearProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
