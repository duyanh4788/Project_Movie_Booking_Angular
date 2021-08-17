import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ShortcutPipe } from './shortcut.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    SafePipe,
    ShortcutPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    ShortcutPipe,
    FilterPipe,
  ]
})
export class PipeModule { }
