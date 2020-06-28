import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookinfoComponent } from './list-bookinfo.component';

describe('ListBookinfoComponent', () => {
  let component: ListBookinfoComponent;
  let fixture: ComponentFixture<ListBookinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
