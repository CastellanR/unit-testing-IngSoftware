import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../main/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be return true', () => {
    const user = '123';
    const pass = '123';
    expect(component.onLogin(user, pass)).toBeTruthy();
  });
});
