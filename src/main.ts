import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";
import { LaunchAnimation } from './app/utils/launch-animation.class';

runNativeScriptAngularApp({
  launchView: () => new LaunchAnimation(),
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
