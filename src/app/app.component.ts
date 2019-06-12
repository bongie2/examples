import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bongie';
 
//Fruits=["Apple","Banana","Pear","pineApple"];
//removeFruits(Fruit)
//{
  //let index= this.Fruits.indexOf(Fruit)
  //this.Fruits.splice(index,1)
  
//}
//lists=["Animals","Fruits","Vegetables"];
//newlist:string='';
//AddNew(){
  
  //this.lists.push(this.newlist)
//}
//RemoveList(list){
  //let index=this.lists.indexOf(list)
  //this.lists.splice(index,1)
//}
//lists=["Animals","Fruits","Vegetables"];
//newlist:string='';
//AddNew(){
  //this.lists.push(this.newlist)
   //}
   //RemoveList(list){
    //let index=this.lists.indexOf(list)
    //this.lists.splice(index,1)
   //}

 //editlist(list)
 //{
//let index=this.lists.indexOf(list)

//let newname =prompt("edit your list",list)
 // if(newname!=null)
//{
  //list[index]=newname
   
//}
//}
tasks=[];
empty=true
newTask : string = "";
newPriority : string = "";

addNew(){
this.tasks.push({taskName:this.newTask ,priority:this.newPriority});

this.newTask="";
this.newPriority="";
if(this.tasks.length>0){
  this.empty=false
}
}

deleteTask(task){
  let index=this.tasks.indexOf(task)
  this.tasks.splice(index,1)
  if(this.tasks.length<=0){
    this.empty=true}
}
editTask(task){
  
  let newTaskName = prompt("edit your new taskName");
 let newPrio= prompt("edit your new priority");
 let index=this.tasks.indexOf(task);
  if((newTaskName!=null) && (newPrio!=null))  {
    this.tasks[index].taskName= newTaskName;
    this.tasks[index].priority=  newPrio;
  }  
}
}
   

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            