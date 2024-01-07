import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteMatComponent } from './societe-mat.component';

describe('SocieteMatComponent', () => {
  let component: SocieteMatComponent;
  let fixture: ComponentFixture<SocieteMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocieteMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
