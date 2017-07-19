import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Output()
  message: EventEmitter<string> = new EventEmitter<string>();
  text: string;
  constructor() { }

  ngOnInit() {
  }
  onKey(event: any) {
    if (event.keyCode === 13) {
      this.emitParent();
    }
  }
  onClick(event: object) {
    this.emitParent();
  }
  emitParent() {
    this.message.emit(this.text);
    this.text = '';
  }

}
