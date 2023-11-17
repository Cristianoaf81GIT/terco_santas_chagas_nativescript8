import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { TuesDayRoutingModule } from './tuesday-routing.module';
import { TuesDayComponent } from './tuesday.component';

@NgModule({
  imports: [NativeScriptCommonModule, TuesDayRoutingModule],
  declarations: [TuesDayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TuesDayModule {}
