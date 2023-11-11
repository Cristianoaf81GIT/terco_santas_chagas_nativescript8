import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { HowToPrayRoutingModule } from './how-to-pray-routing.module';
import { HowToPrayComponent } from './how-to-pray.component';

@NgModule({
  imports: [NativeScriptCommonModule, HowToPrayRoutingModule],
  declarations: [HowToPrayComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HowToPrayModule {}
