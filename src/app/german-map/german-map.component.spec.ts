import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanMapComponent } from './german-map.component';

describe('GermanMapComponent', () => {
  let component: GermanMapComponent;
  let fixture: ComponentFixture<GermanMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
