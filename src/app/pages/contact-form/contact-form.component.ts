import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    name: [''],
    email: [''],
    message: ['']
  });

  submitContactMessage(): void {
    console.log('isi form:', this.form.getRawValue());
    console.log('nama aja:', this.form.controls.name.value);
    this.router.navigate(['/thank-you']);
  }
}
