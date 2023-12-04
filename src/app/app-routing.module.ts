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
    path: 'thursday',
    loadChildren: () => import('~/app/thursday/thursday.module').then((m)=> m.ThursdayModule),
  },
  {
    path: 'friday',
    loadChildren: () => import('~/app/friday/friday.module').then((m) => m.FridayModule)
  },
  {
    path: 'saturday',
    loadChildren: () => import('~/app/saturday/saturday.module').then((m) => m.SaturdayModule),
  },
  {
    path: 'sunday',
    loadChildren: () => import('~/app/sunday/sunday.module').then((m) => m.SundaydayModule)
  },
  {
    path: 'liturgy',
    loadChildren: () => import('~/app/liturgy/liturgy.module').then((m) => m.LiturgyModule),
  },
  {
    path: 'novena',
    loadChildren: () => import('~/app/novena/novena.module').then((m) => m.NovenaModule)
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
