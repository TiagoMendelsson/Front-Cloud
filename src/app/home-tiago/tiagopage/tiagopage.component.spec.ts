import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiagopageComponent } from './tiagopage.component';

describe('TiagopageComponent', () => {
  let component: TiagopageComponent;
  let fixture: ComponentFixture<TiagopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiagopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiagopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
