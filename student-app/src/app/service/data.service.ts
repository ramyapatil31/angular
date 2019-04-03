import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Student from '../student';

@Injectable({
  providedIn: 'root'
})
export default class DataService {
  constructor() { }

  students = [
     {id : 1, firstName: 'Ramya', lastName:'Patil', email:'ramya@gmail.com', phone:'4567'},
     {id : 2, firstName: 'Ramya', lastName:'Patil', email:'ramya123@gmail.com', phone:'4567'}
  	];

getStudents(){
		return this.students;
}
 

  addUpdateStudents(student){
    var updated= false;
    for(var i=0; i<this.students.length;i++){
      if(student.id==this.students[i].id){
        updated=true;
        this.students[i] = student;
        break;
      }
    }
    if(!updated){
      student.id= Math.round(Math.random()*1000);
      this.students.push(student);
    }
   }

  /*addStudent(student){
    student.id= Math.round(Math.random()*1000);
      this.students.push(student);
  }

  updateStudent(student){
      var updated = false;
      for(var i=0; i<this.students.length;i++){
      if(student.id==this.students[i].id){
        updated=true;
        this.students[i] = student;
        break;
      }
    }
  }*/

deleteStudent(s){
   	for(var i=0; i<this.students.length;i++){
   	if(s.id==this.students[i].id){
   		this.students.splice(i,1);
     }
   	}
   	return null;
   }

getStudentById(id){
   	for(var i=0; i<this.students.length;i++){
   		if(id== this.students[i].id){
   			return this.students[i];
   		}
   	}
     return null;
   }

deleteAllStudents(){
   	this.students =[];
   } 

}
