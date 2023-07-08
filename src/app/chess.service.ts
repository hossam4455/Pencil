import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ChessService {
 BoardEmitter = new EventEmitter<any>()
} 