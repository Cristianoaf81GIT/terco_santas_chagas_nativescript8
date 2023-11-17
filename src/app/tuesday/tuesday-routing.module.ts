import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { TuesDayComponent } from './tuesday.component';

const routes: Routes = [{ path: '', component: TuesDayComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TuesDayRoutingModule {}
