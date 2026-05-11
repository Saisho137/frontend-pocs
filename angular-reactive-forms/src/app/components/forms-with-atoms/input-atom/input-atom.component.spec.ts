import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAtomComponent } from './input-atom.component';

describe('InputAtomComponent', () => {
  let component: InputAtomComponent;
  let fixture: ComponentFixture<InputAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
