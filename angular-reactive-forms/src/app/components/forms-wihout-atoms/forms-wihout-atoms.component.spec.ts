import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWihoutAtomsComponent } from './forms-wihout-atoms.component';

describe('FormsWihoutAtomsComponent', () => {
  let component: FormsWihoutAtomsComponent;
  let fixture: ComponentFixture<FormsWihoutAtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsWihoutAtomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsWihoutAtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
