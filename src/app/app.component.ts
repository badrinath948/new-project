import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
content: boolean;
 send(){
   if (confirm('send')){
     alert('yes')
   }
   else{
     alert('no')
   }
 }

 getVal(){
   alert('keyup')
 }
 check(event) {
  if ( event.target.checked ) {
      this.content = true;
      alert('selected')
 } else{
   alert('unselected')
 }
}

radio(event){
  if(event.target.radio){
    this.content = true;
  }else{
    alert('no')
  }
}
down(){
  alert('drag')
}
scroll(){
  alert("sellect")
}

}


