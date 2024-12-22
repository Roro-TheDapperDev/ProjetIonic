import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeocachePage } from './geocache.page';

describe('GeocachePage', () => {
  let component: GeocachePage;
  let fixture: ComponentFixture<GeocachePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
