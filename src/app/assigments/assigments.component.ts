import { Component, OnInit } from '@angular/core';
import { Assigment } from './assigment.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-assigments',
  templateUrl: './assigments.component.html',
  styleUrls: ['./assigments.component.css']
})
export class AssigmentsComponent implements OnInit {

title = 'My Assigments Applications';
enabled = false;
name = 'string';
dueDate: Date;

assigments: Assigment[] = [{
  name: 'One',
  dueDate: new Date;('2018-01-01'),
  submitted: true
},
{
  name: 'Two',
  dueDate: new Date('2019-01-01'),
  submitted: false
}];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.enabled = true;
    }, 2000)}
    onSubmit(){
      const assigment = new Assigment();
      assigment.name = this.name;
  }

}
