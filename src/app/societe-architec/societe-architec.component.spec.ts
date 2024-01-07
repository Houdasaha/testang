import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteArchitecComponent } from './societe-architec.component';

describe('SocieteArchitecComponent', () => {
  let component: SocieteArchitecComponent;
  let fixture: ComponentFixture<SocieteArchitecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteArchitecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocieteArchitecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
