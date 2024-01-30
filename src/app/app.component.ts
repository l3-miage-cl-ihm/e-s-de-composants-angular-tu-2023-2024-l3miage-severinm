import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly cssStyle = signal<CssStyle>(defaultStyle);
  public readonly style = computed<CssStyle>(this.cssStyle);

  public setStyle(c: CssStyle) { this.cssStyle.set(c) }
}
