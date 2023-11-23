import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ThursdayRoutingModule } from "./thursday-routing.module";
import { ThursdayComponent } from "./thursday.component";

@NgModule({
  imports: [NativeScriptCommonModule, ThursdayRoutingModule],
  declarations: [ThursdayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ThursdayModule {}
