import { Component, OnInit, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application, StackLayout, CoreTypes } from '@nativescript/core';
import { TEvangelion, TEvangelionRecord, TMisteriesNumber  } from '../typedefs/global-types.defs';
import { HttpServices } from '../services/http.service';

@Component({
  selector: 'Browse',
  templateUrl: './monday.component.html',
  styleUrls: ['monday.scss']
})
export class MondayComponent implements OnInit {

  @ViewChild('bottomSheet')
  private bottomSheet!: any;

  private misteries: TEvangelion = {
   1: {book: 'jo', chapter: 8, start: 3, end: 11, weekday: 'mon'},
   2: {book: 'jo', chapter: 4, start: 9, end: 14, weekday: 'mon'},
   3: {book: 'jo', chapter: 11, start: 21, end: 25, weekday: 'mon'},
   4: {book: 'jo', chapter: 10, start: 14, end: 27, weekday: 'mon'},
   5: {book: 'lc', chapter: 23, start: 39, end: 43, weekday: 'mon'},
  }

  backgroundColor = '#fff';

  loading: boolean = false;

  constructor(private readonly http: HttpServices) { }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  async onTap(day: TMisteriesNumber | 0) {
    this.loading = !this.loading;
    if (this.bottomSheet !== null) {
      const elm = this.bottomSheet.nativeElement as StackLayout;
      const { height } = elm.getActualSize();
      this.backgroundColor = height <= 0 ? 'rgba(40,40,40,0.75)' : '#fff';
      elm.animate({
        height: height <= 0 ? '100%' : '0%',
        curve: CoreTypes.AnimationCurve.cubicBezier(.18,.43,.78,.49),
        duration: 1000
      });
    }

    if (day > 0) {
      const {book, chapter, start, end} = this.misteries[day];
      const response = await this.http.getText({
        book,
        chapter,
        start,
        end
      } as TEvangelionRecord);
      console.log(response);
      this.loading = false;
    }

  }
}
