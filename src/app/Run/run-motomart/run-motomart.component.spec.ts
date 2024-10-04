import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunMotomartComponent } from './run-motomart.component';

describe('RunMotomartComponent', () => {
  let component: RunMotomartComponent;
  let fixture: ComponentFixture<RunMotomartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunMotomartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunMotomartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
