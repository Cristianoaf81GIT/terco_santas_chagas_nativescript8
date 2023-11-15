import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { MondayRoutingModule } from './monday-routing.module';
import { MondayComponent } from './monday.component';
import { HttpServices } from '../services/http.service';

@NgModule({
  imports: [NativeScriptCommonModule, MondayRoutingModule],
  declarations: [MondayComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [HttpServices]
})
export class MondayModule {}
