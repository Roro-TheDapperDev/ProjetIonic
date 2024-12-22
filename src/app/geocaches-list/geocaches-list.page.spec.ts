import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeocachesListPage } from './geocaches-list.page';

describe('GeocachesListPage', () => {
  let component: GeocachesListPage;
  let fixture: ComponentFixture<GeocachesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocachesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
