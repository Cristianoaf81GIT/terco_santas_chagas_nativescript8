import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { WednesdayComponent } from "./wednesday.component";

const routes: Routes = [{ path: "", component: WednesdayComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class WednesdayRoutingModule {}
