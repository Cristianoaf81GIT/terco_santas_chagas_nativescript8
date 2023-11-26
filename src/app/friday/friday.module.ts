import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { FridayRoutingModule } from "./friday-routing.module";
import { FridayComponent } from "./friday.component";

@NgModule({
  imports: [NativeScriptCommonModule, FridayRoutingModule],
  declarations: [FridayComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FridayModule {}
