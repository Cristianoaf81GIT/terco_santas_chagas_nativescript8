import { Component, OnInit, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application, StackLayout, CoreTypes } from '@nativescript/core';

@Component({
  selector: 'Browse',
  templateUrl: './monday.component.html',
  styleUrls: ['monday.scss']
})
export class MondayComponent implements OnInit {

  @ViewChild('bottomSheet')
  private bottomSheet!: any;

  backgroundColor = '#fff';

  constructor() {
  }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onTap() {
    if (this.bottomSheet !== null) {
      const elm = this.bottomSheet.nativeElement as StackLayout;
      const { height } = elm.getActualSize();
      this.backgroundColor = height <=0 ? 'rgba(40,40,40,0.75)' : '#fff';
      elm.animate({
        height: height <= 0 ? '100%' : '0%',
        curve: CoreTypes.AnimationCurve.cubicBezier(.18,.43,.78,.49),
        duration: 1
      });
    }
  }
}
