import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucaspageComponent } from './lucaspage.component';

describe('LucaspageComponent', () => {
  let component: LucaspageComponent;
  let fixture: ComponentFixture<LucaspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucaspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucaspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
