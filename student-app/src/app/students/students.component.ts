import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from '../student';
import DataService from '../service/data.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
   ngOnInit() {}
   student = {
      id:0,
      firstName:'',
      lastName: '',
      email:'',
      phone:''
    }
  students = this.dataService.getStudents();
  
  addUpdateStudents(student){
   this.dataService.addUpdateStudents(student);
   this.students = this.dataService.getStudents();
   }

   deleteStudent(student){
   this.dataService.deleteStudent(student);
   this.students = this.dataService.getStudents();
   }

   deleteAllStudents(){
   	this.dataService.deleteAllStudents();
   this.students = this.dataService.getStudents();
   }

   selectStudent(student){
   	this.student = student;
   }

    logout(){
  	this.router.navigate(['/login']);
  }

 

}
