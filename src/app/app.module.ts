import "@angular/compiler";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { asyncBoot } from "./utils/async-boot.function";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
  ],
  declarations: [AppComponent],
//  providers: [{ provide: APP_INITIALIZER, useFactory: asyncBoot, multi: true }],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
