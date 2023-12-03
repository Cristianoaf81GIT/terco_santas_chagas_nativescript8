import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, StackLayout, CoreTypes } from "@nativescript/core";
import {
  TEvangelion,
  TEvangelionRecord,
  TMisteriesNumber,
  TMisteryText,
} from "../typedefs/global-types.defs";
import { HttpServices } from "../services/http.service";
import { StorageServices } from "../services/storage.service";

@Component({
  selector: "Sunday",
  templateUrl: "./sunday.component.html",
})
export class SundayComponent implements OnInit, OnDestroy {
  @ViewChild("bottomSheet")
  private bottomSheet!: any;

  private misteries: TEvangelion = {
    1: { book: "at", chapter: 2, start: 1, end: 13, weekday: "sun" },
    2: { book: "at", chapter: 2, start: 14, end: 41, weekday: "sun" },
    3: { book: "at", chapter: 3, start: 1, end: 6, weekday: "sun" },
    4: { book: "at", chapter: 9, start: 1, end: 25, weekday: "sun" },
    5: { book: "mt", chapter: 28, start: 19, end: 20, weekday: "sun" },
  };

  backgroundColor = "#fff";

  loading: boolean = false;

  evangelionText: string = "";

  private timer: any = null;

  selectedWeekDay: TEvangelionRecord | null = null;

  misteryTitle: string | null = null;

  constructor(
    private readonly http: HttpServices,
    private readonly storage: StorageServices
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
      this.evangelionText = "";
      this.selectedWeekDay = null;
      this.misteryTitle = null;
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  async onTap(day: TMisteriesNumber | 0) {
    this.loading = true;
    if (this.bottomSheet !== null) {
      const elm = this.bottomSheet.nativeElement as StackLayout;
      const { height } = elm.getActualSize();
      this.backgroundColor = height <= 0 ? "rgba(40,40,40,0.75)" : "#fff";
      elm.animate({
        height: height <= 0 ? "100%" : "0%",
        curve: CoreTypes.AnimationCurve.cubicBezier(0.18, 0.43, 0.78, 0.49),
        duration: 100,
      });
    }

    if (day > 0) {
      const { book, chapter, start, end, weekday } = this.misteries[day];
      this.misteryTitle = `${book}, ${chapter} ${start} - ${end}`.toUpperCase();
      this.selectedWeekDay = this.misteries[day];
      const key = `${weekday}#${day}`;
      const result = this.storage.get<TMisteryText>(key);
      if (result && result.hasOwnProperty(weekday)) {
        this.evangelionText = result[weekday][day];
        this.loading = false;
      } else {
        const response = await this.http.getText({
          book,
          chapter,
          start,
          end,
        } as TEvangelionRecord);
        this.timer = setTimeout(() => {
          const value: TMisteryText = {
            [`${weekday}`]: {
              [day as number]: response,
            },
          };
          this.storage.save(key, value);
          this.evangelionText = response;
          this.loading = false;
        }, 500);
      }
    } else {
      this.evangelionText = "";
      this.loading = false;
      this.selectedWeekDay = null;
      this.misteryTitle = null;
    }
  }
}

