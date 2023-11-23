import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { TuesDayRoutingModule } from "./tuesday-routing.module";
import { TuesDayComponent } from "./tuesday.component";
import { StorageServices } from "../services/storage.service";
import { HttpServices } from "../services/http.service";

@NgModule({
  imports: [NativeScriptCommonModule, TuesDayRoutingModule],
  declarations: [TuesDayComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [HttpServices, StorageServices],
})
export class TuesDayModule {}
