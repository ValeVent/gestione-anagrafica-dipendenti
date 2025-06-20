import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoDipendenteComponent } from './inserimento-dipendente.component';

describe('InserimentoDipendenteComponent', () => {
  let component: InserimentoDipendenteComponent;
  let fixture: ComponentFixture<InserimentoDipendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserimentoDipendenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserimentoDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
