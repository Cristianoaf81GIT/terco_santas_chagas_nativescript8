import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HowToPrayComponent } from './how-to-pray.component';

const routes: Routes = [{ path: '', component: HowToPrayComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HowToPrayRoutingModule {}
