import { Injectable } from "@angular/core";
import { ApplicationSettings } from "@nativescript/core";

@Injectable({ providedIn: "root" })
export class StorageServices {
  public save(key: string, value: Record<string, any>): boolean {
    ApplicationSettings.setString(key, JSON.stringify(value));
    return ApplicationSettings.flush();
  }

  public get<T>(key: string): T {
    const value = ApplicationSettings.getString(key, "");
    return JSON.parse(value || "{}") as T;
  }
}
