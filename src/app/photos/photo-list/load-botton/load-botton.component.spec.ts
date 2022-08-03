import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBottonComponent } from './load-botton.component';

describe('LoadBottonComponent', () => {
  let component: LoadBottonComponent;
  let fixture: ComponentFixture<LoadBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadBottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
