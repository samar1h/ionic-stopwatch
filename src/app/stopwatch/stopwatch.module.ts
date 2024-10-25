import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import {StopwatchComponent} from "./stopwatch.component"

@NgModule({
  declarations: [StopwatchComponent],
  imports: [
    IonicModule,
    CommonModule
],
})
export class StopwatchModule {}
