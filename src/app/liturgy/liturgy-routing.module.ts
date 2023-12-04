import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { LiturgyComponent } from "./liturgy.component";

const routes: Routes = [{ path: "", component: LiturgyComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class LiturgyRoutingModule {}
