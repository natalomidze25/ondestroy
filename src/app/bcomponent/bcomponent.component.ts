import { Component } from '@angular/core';

@Component({
  selector: 'app-bcomponent',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css']
})
export class BComponentComponent {

  seconds :number = 0;

  timeCount(seconds:number){
    this.seconds = seconds;
  }

  showTimer = true;

  toggleTimer() {
    this.seconds = 0;
    this.showTimer = !this.showTimer;
  }

}
