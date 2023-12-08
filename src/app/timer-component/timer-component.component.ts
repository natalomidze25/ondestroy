
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css']
})
export class TimerComponentComponent implements OnInit, OnDestroy {
  seconds = 0;
  private timerId: any;

  @Output() timeLeft = new EventEmitter<number>();

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.seconds++;
    }, 500);
  }

  ngOnDestroy() {
    this.timeLeft.emit(this.seconds);
  }
}
