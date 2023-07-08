import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MoveChange, NgxChessBoardComponent } from 'ngx-chess-board';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-iframe-two',
  templateUrl: './iframe-two.component.html',
  styleUrls: ['./iframe-two.component.css']
})
export class IframeTwoComponent implements OnInit {
  
  @ViewChild('board', { static: false }) board: NgxChessBoardComponent | any;
  @Input() moveIFrameTwo: Subject<MoveChange> | any;
  @Input() newGameFlag: Subject<boolean> | any;
  @Output() moveEvent = new EventEmitter<any>();
  resetGame: boolean = false;
  receivedPGN: string = 'sss'; // Declare receivedPGN variable

  constructor(private cd: ChangeDetectorRef) {
    window.addEventListener('message', this.handleMessage.bind(this));
    console.log(this.receivedPGN)
  }

  moveItem(move: MoveChange): void {
    this.moveEvent.emit(move);  
  }

  handleClick(): void {
    this.board.setFEN(localStorage.getItem('getFEN'));
  }
  
  ngOnInit(): void {
    const fen = localStorage.getItem('getFEN');
    console.log('Received PGN:', this.receivedPGN);
    this.cd.detectChanges();
    this.board.setFEN(fen || this.receivedPGN);

    this.moveIFrameTwo.subscribe((move: any) => {
      this.board?.setPGN(move?.pgn);
      this.board?.setFEN(move?.fen);
      // Example usage
    });

    this.newGameFlag.subscribe((el: any) => {
      this.board?.reset();
    });
  }

  handleMessage(event: MessageEvent): void {
    const data = event.data; // Received data from IframeOneComponent
    console.log('Received message:', data); // Check if the message is received
    this.receivedPGN = data;
    if (data.pgn) {
      // Handle the received PGN here
      this.receivedPGN = data.pgn; // Assign received PGN to the class variable
      // Do something with the received PGN in IframeTwoComponent
    }
  }
}
