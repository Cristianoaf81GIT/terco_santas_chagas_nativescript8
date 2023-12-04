import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { NovenaRoutingModule } from './novena-routing.module';
import { NovenaComponent } from './novena.component';

@NgModule({
  imports: [NativeScriptCommonModule, NovenaRoutingModule],
  declarations: [NovenaComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NovenaModule {}
