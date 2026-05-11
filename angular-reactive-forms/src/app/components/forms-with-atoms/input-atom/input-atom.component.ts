import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-atom',
  templateUrl: './input-atom.component.html',
  styleUrls: ['./input-atom.component.scss']
})
export class InputAtomComponent {
  @Input() id = '';
  @Input() type = 'text';
  @Input() contentText = '';
  @Input() required = false;
  @Input() readOnly = false;

  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange() {
    this.inputChange.emit(this.contentText);
  }
}
