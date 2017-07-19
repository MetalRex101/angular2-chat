import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  message = '';
  @Input()
  needNav = false;
  @Input()
  isOpen = false;
  @Output()
  yesEmitter = new EventEmitter();
  @Output()
  closeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  close() {
    this.isOpen = false;
    this.closeEmitter.next();
  }
  emitYes() {
    this.yesEmitter.next();
  }

}
