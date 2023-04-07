import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {

  agent!: Observable<string>;
  constructor(){

  }
  ngOnInit(): void {
    this.agent = new Observable(
      function(_observer){
      try{
        _observer.next('a');
        _observer.next('b');
        _observer.next('c');
      }
      catch(e){
      _observer.error(e);
      }
      }
    );
    this.agent.subscribe((data:any)=>{
      console.log(data)
     })
  }
 
  
}
