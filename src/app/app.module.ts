import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CssStylerComponent } from './css-styler/css-styler.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CssStylerComponent,
    ColorSelectorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
