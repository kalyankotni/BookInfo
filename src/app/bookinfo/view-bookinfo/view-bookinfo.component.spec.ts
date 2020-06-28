import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookinfoComponent } from './view-bookinfo.component';

describe('ViewBookinfoComponent', () => {
  let component: ViewBookinfoComponent;
  let fixture: ComponentFixture<ViewBookinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
