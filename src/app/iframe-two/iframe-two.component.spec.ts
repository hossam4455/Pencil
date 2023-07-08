import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeTwoComponent } from './iframe-two.component';

describe('IframeTwoComponent', () => {
  let component: IframeTwoComponent;
  let fixture: ComponentFixture<IframeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
