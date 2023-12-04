import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { LiturgyRoutingModule } from "./liturgy-routing.module";
import { LiturgyComponent } from "./liturgy.component";

@NgModule({
  imports: [NativeScriptCommonModule, LiturgyRoutingModule],
  declarations: [LiturgyComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LiturgyModule {}
