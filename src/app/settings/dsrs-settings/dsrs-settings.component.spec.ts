import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsrsSettingsComponent } from './dsrs-settings.component';

describe('DsrsSettingsComponent', () => {
  let component: DsrsSettingsComponent;
  let fixture: ComponentFixture<DsrsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsrsSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsrsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
