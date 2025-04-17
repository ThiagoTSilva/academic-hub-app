import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password" 

@Component({
  selector: 'app-default-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './default-input.component.html',
  styleUrl: './default-input.component.css',
  standalone: true,
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DefaultInputComponent),
    multi: true
  }]
})
export class DefaultInputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";
  @Input() showIcon: boolean = true;

  value: string = ''

  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}
