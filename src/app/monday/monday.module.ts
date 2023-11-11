import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { MondayRoutingModule } from './monday-routing.module'
import { MondayComponent } from './monday.component'

@NgModule({
  imports: [NativeScriptCommonModule, MondayRoutingModule],
  declarations: [MondayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MondayModule {}
