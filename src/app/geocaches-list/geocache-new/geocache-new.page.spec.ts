import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeocacheNewPage } from './geocache-new.page';

describe('GeocacheNewPage', () => {
  let component: GeocacheNewPage;
  let fixture: ComponentFixture<GeocacheNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
