import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MondayComponent } from './monday.component'

const routes: Routes = [{ path: '', component: MondayComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class MondayRoutingModule {}
