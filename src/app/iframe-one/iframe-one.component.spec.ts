import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeOneComponent } from './iframe-one.component';

describe('IframeOneComponent', () => {
  let component: IframeOneComponent;
  let fixture: ComponentFixture<IframeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
