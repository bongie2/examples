import { Component } from '@angular/core';
import { fromStringWithSourceMap } from 'source-list-map';

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
lists=["Animals","Fruits","Vegetables"];
newlist:string='';
AddNew(){
  this.lists.push(this.newlist)
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            