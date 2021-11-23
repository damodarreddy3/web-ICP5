import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from 'src/api/todolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 todos: Todo[] = [];
// first Function
todoAddition(inputdata:NgForm){
   let itemlist= new Todo(Guid.create(), inputdata.value.name,false);
   this.todos.push(itemlist);
   inputdata.resetForm();
 }
 //completed function
 addition(identity: Guid){
let valueTodo=this.todos.filter(a=>a.id === identity)[0];
valueTodo.completed=true;
 }
 //delete function
 remove(identity: Guid){
  let todoValue=this.todos.filter(a=>a.id === identity)[0];
  let position=this.todos.indexOf(todoValue,0);
  if(position > -1){
    this.todos.splice(position,1)
  }
}
}
