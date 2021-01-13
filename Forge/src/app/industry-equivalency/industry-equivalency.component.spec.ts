import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IndustryEquivalencyComponent } from './industry-equivalency.component';

describe('IndustryEquivalencyComponent', () => {
  let component: IndustryEquivalencyComponent;
  let fixture: ComponentFixture<IndustryEquivalencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryEquivalencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryEquivalencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call save', () => {
    spyOn(component, 'save');

    let button: HTMLSelectElement = fixture.debugElement.query(By.css('.save-button')).nativeElement;
    button.click();

    expect(component.save).toHaveBeenCalled();
  });

  it('should call addLabel', () => {
    spyOn(component, 'addLabel');

    let button: HTMLSelectElement = fixture.debugElement.query(By.css('.add-button')).nativeElement;
    button.click();

    expect(component.addLabel).toHaveBeenCalled();
  });

  it('should call subtractLabel', () => {
    spyOn(component, 'subtractLabel');

    let button: HTMLSelectElement = fixture.debugElement.query(By.css('.subtract-button')).nativeElement;
    button.click();

    expect(component.subtractLabel).toHaveBeenCalled();
  });
});
