import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { SaturdayRoutingModule } from "./saturday-routing.module";
import { SaturdayComponent } from "./saturday.component";

@NgModule({
  imports: [NativeScriptCommonModule, SaturdayRoutingModule],
  declarations: [SaturdayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SaturdayModule {}
