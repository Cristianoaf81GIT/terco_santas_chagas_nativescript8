import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'how-to-pray',
    loadChildren: () => import('~/app/how-to-pray/how-to-pray.module').then((m) => m.HowToPrayModule),
  },
  {
    path: 'monday',
    loadChildren: () => import('~/app/monday/monday.module').then((m) => m.MondayModule),
  },
  {
    path: 'tuesday',
    loadChildren: () => import('~/app/tuesday/tuesday.module').then((m) => m.TuesDayModule),
  },
  {
    path: 'wednesday',
    loadChildren: () => import('~/app/wednesday/wednesday.module').then((m) => m.WednesdayModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
