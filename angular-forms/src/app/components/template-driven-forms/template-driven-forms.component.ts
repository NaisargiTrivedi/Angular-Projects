import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  data: Array<employee> = [];

  save = (form: NgForm) => {
    this.data.push(form.value);
  }
}
