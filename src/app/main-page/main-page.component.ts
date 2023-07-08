import { Component, OnInit } from '@angular/core';
import { MoveChange } from 'ngx-chess-board';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  move: Subject<MoveChange> = new Subject();
  newGameFlag: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  moveInParent(move: MoveChange) {
    this.move.next(move);
  }

  createNewGame() {
    this.newGameFlag.next(true);
  }

}
