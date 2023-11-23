import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { WednesdayRoutingModule } from "./wednesday-routing.module";
import { WednesdayComponent } from "./wednesday.component";

@NgModule({
  imports: [NativeScriptCommonModule, WednesdayRoutingModule],
  declarations: [WednesdayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WednesdayModule {}
