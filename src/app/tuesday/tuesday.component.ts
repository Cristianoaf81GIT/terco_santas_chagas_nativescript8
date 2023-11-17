import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application, StackLayout, CoreTypes } from '@nativescript/core';
import { TEvangelion, TEvangelionRecord, TMisteriesNumber  } from '../typedefs/global-types.defs';
import { HttpServices } from '../services/http.service';

@Component({
  selector: 'Browse',
  templateUrl: './tuesday.component.html',
})
export class TuesDayComponent implements OnInit, OnDestroy {

  @ViewChild('bottomSheet')
  private bottomSheet!: any;

  private misteries: TEvangelion = {
   1: {book: 'lc', chapter: 22, start: 47, end: 54, weekday: 'tue'},
   2: {book: 'mc', chapter: 15, start: 12, end: 15, weekday: 'tue'},
   3: {book: 'mc', chapter: 15, start: 22, end: 25, weekday: 'tue'},
   4: {book: 'lc', chapter: 23, start: 44, end: 46, weekday: 'tue'},
   5: {book: 'jo', chapter: 19, start: 32, end: 34, weekday: 'tue'},
  }

  backgroundColor = '#fff';

  loading: boolean = false;

  evangelionText: string = '';

  private timer: any = null;

  selectedWeekDay: TEvangelionRecord | null = null;

  misteryTitle: string | null = null;

  constructor(private readonly http: HttpServices) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if(this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
      this.evangelionText = '';
      this.selectedWeekDay = null;
      this.misteryTitle = null;
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  async onTap(day: TMisteriesNumber | 0) {
    this.loading = true;
    if (this.bottomSheet !== null) {
      const elm = this.bottomSheet.nativeElement as StackLayout;
      const { height } = elm.getActualSize();
      this.backgroundColor = height <= 0 ? 'rgba(40,40,40,0.75)' : '#fff';
      elm.animate({
        height: height <= 0 ? '100%' : '0%',
        curve: CoreTypes.AnimationCurve.cubicBezier(.18,.43,.78,.49),
        duration: 100
      });
    }

    if (day > 0) {
      const {book, chapter, start, end} = this.misteries[day];
      this.misteryTitle = `${book}, ${chapter} ${start} - ${end}`.toUpperCase();
      this.selectedWeekDay = this.misteries[day];
      const response = await this.http.getText({
        book,
        chapter,
        start,
        end
      } as TEvangelionRecord);
      this.timer = setTimeout(() => {
        this.evangelionText = response;
        this.loading = false;
      }, 500);
    } else {
      this.evangelionText = '';
      this.loading = false;
      this.selectedWeekDay = null;
      this.misteryTitle = null;
    }
  }
}

