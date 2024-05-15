import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEjecutivoComponent } from './plan-ejecutivo.component';

describe('PlanEjecutivoComponent', () => {
  let component: PlanEjecutivoComponent;
  let fixture: ComponentFixture<PlanEjecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanEjecutivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
