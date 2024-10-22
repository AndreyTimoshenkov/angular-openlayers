import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnMapComponent } from './cn-map.component';

describe('CnMapComponent', () => {
  let component: CnMapComponent;
  let fixture: ComponentFixture<CnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
