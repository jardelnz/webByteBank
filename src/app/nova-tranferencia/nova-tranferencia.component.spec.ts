import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTranferenciaComponent } from './nova-tranferencia.component';

describe('NovaTranferenciaComponent', () => {
  let component: NovaTranferenciaComponent;
  let fixture: ComponentFixture<NovaTranferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTranferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTranferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
