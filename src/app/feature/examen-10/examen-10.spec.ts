import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examen10 } from './examen-10';

describe('Examen10', () => {
  let component: Examen10;
  let fixture: ComponentFixture<Examen10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Examen10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Examen10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
