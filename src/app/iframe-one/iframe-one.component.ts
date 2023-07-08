import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  MoveChange,
  NgxChessBoardComponent
} from 'ngx-chess-board';
import { Subject } from 'rxjs';
import { ChessService } from '../chess.service';
@Component({
  selector: 'app-iframe-one',
  templateUrl: './iframe-one.component.html',
  styleUrls: ['./iframe-one.component.css'],
})
export class IframeOneComponent implements OnInit, AfterViewInit {

  
  constructor(private cd:ChangeDetectorRef) {

  }
  

  @ViewChild('board', { static: false }) board: NgxChessBoardComponent | any;
  @Output() moveEvent = new EventEmitter<any>();
  @Input() newGameFlag: Subject<boolean> | any;
  @Input() moveIFrameOne: Subject<MoveChange> | any;
  moveHistory:any;
 
  moveItem(move: MoveChange): void {
    this.moveEvent.emit(move);
  }

  showMove() { 
   
    this.moveHistory = JSON.stringify(this.board.getMoveHistory());
    console.log(this.moveHistory);
  }

  ngOnInit(): void {

    this.cd.detectChanges()
    const moves = localStorage.getItem('getFEN');
    if(moves !== 'undefined') this.board.setFEN(moves);
    this.moveIFrameOne.subscribe( (move:any) => {
  
   
     this.board?.setPGN(move?.pgn);
     this.board?.setFEN(move?.fen);    
     this.board.reverse();
     this.sendPGNToIframeTwo();
     localStorage.setItem('getPGN', this.board?.getPGN());
     localStorage.setItem('getFEN', this.board?.getFEN());
   

    });

    this.newGameFlag.subscribe((el:any) => {    
      this.board?.reset();
      this.board.reverse();
      localStorage.clear();
    })
  }

  ngAfterViewInit() {
   // this.board.reverse();
  }
  sendPGNToIframeTwo(): void {
    const pgn = this.board?.getFEN();
    const data = { pgn };
    const iframeWindow = window.parent; // Get the reference to the parent window
    iframeWindow.postMessage(data, '*'); // Replace '*' with the origin of the parent window if necessary
  }
}
