import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWithAtomsComponent } from './forms-with-atoms.component';

describe('FormsWithAtomsComponent', () => {
  let component: FormsWithAtomsComponent;
  let fixture: ComponentFixture<FormsWithAtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsWithAtomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsWithAtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
