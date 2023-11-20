import { Component } from '@angular/core';
import { employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-without-forms',
  templateUrl: './without-forms.component.html',
  styleUrls: ['./without-forms.component.css']
})
export class WithoutFormsComponent {
  name: string;
  email: string;
  address: string;

  data: Array<employee> = [];

  save = () => {
    const emp = {
      name: this.name,
      email: this.email,
      address: this.address
    }
    this.data.push(emp);
    console.log(this.data);
  }
}
