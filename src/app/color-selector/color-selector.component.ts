import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorSelectorComponent {

  @Input({required: true}) color: string = '';

  @Output() colorChange = new EventEmitter<string>();

  decimalToHex(s: string) { return parseInt(s).toString(16); }
  hexToDecimal(s: string) { return parseInt(s, 16).toString() }

  updateColor(c:{r: string, g: string, b: string}) {
    c.r = parseInt(c.r).toString(16);
    c.g = parseInt(c.g).toString(16);
    c.b = parseInt(c.b).toString(16);
    this.colorChange.emit('#' + c.r + c.g + c.b);
  }

}
