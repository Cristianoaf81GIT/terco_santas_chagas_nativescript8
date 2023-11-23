import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ThursdayComponent } from "./thursday.component";

const routes: Routes = [{ path: "", component: ThursdayComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ThursdayRoutingModule {}
