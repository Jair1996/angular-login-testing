import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debe ser invalido si esta vacio', () => {
    const form = component.loginForm;

    expect(form.invalid).toBeTruthy();
  });

  it('el formulario debe ser invalido si el username no es un correo valido', () => {
    const form = component.loginForm;

    form.get('username')?.setValue('jair@');
    form.get('password')?.setValue('123456');

    expect(form.invalid).toBeTruthy();
  });

  it('el formulario debe ser invalido si el password tiene menos de 5 caracteres', () => {
    const form = component.loginForm;

    form.get('username')?.setValue('jair@gmail.com');
    form.get('password')?.setValue('1234');

    expect(form.invalid).toBeTruthy();
  });

  it('el formulario debe ser valido si se ingresan los datos correctos', () => {
    const form = component.loginForm;

    form.get('username')?.setValue('jair@gmail.com');
    form.get('password')?.setValue('123456');

    expect(form.valid).toBeTruthy();
  });

  it('debe alamacenar el username en la variable userLoggedIn luego de presionar el boton', () => {
    const form = component.loginForm;
    const username = 'jair@gmail.com';
    const password = '123456';

    form.get('username')?.setValue(username);
    form.get('password')?.setValue(password);

    const button = fixture.debugElement.nativeElement.querySelector('.btn') as HTMLButtonElement;
    button.disabled = false
    button.click();

    expect(component.userLoggedIn).toBe('jair@gmail.com');
  });
});
