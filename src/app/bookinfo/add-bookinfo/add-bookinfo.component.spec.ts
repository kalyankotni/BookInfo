import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookinfoComponent } from './add-bookinfo.component';

describe('AddBookinfoComponent', () => {
  let component: AddBookinfoComponent;
  let fixture: ComponentFixture<AddBookinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
