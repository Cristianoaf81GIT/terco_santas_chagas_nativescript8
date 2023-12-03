import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { SundayRoutingModule } from "./sunday-routing.module";
import { SundayComponent } from "./sunday.component";

@NgModule({
  imports: [NativeScriptCommonModule, SundayRoutingModule],
  declarations: [SundayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SundaydayModule {}
