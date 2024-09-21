import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomThemeComponent } from './create-custom-theme.component';

describe('CreateCustomThemeComponent', () => {
  let component: CreateCustomThemeComponent;
  let fixture: ComponentFixture<CreateCustomThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
