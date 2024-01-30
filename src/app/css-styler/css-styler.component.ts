import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CssStyle, Unit, defaultStyle } from '../data';

@Component({
  selector: 'app-css-styler',
  templateUrl: './css-styler.component.html',
  styleUrls: ['./css-styler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CssStylerComponent {

  private _style = signal<CssStyle>(defaultStyle);

  @Input({ required: true })
    get cssStyle(): CssStyle { return this._style() }
    set cssStyle(c: CssStyle) { this._style.set(c) }
  @Output() cssStyleChange = new EventEmitter<CssStyle>();

  update(pStyle: Partial<CssStyle>): void {
    this.cssStyle = {
      backgroundColor :  pStyle.backgroundColor ?? this.cssStyle.backgroundColor,
      borderColor :  pStyle.borderColor ?? this.cssStyle.borderColor,
      borderRadius :  pStyle.borderRadius ?? this.cssStyle.borderRadius
    }
    this.cssStyleChange.emit(this.cssStyle);
  }

  buildRadius(value: string, unit: string): `${number}${Unit}` { return `${value+ unit}` as `${number}${Unit}`}
}
