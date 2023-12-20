import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
import { HttpServices } from "../services/http.service";
import { StorageServices } from "../services/storage.service";
import { TLiturgyResponse } from "../typedefs/global-types.defs";

@Component({
  selector: "Liturgy",
  templateUrl: "./liturgy.component.html",
})
export class LiturgyComponent implements OnInit {
  public liturgyData: TLiturgyResponse;
  public firstReading: string;
  public secondReading: string;
  public psalm: string;
  public evangelion: string;
  public evangelionText: string;

  constructor(private http: HttpServices, private storage: StorageServices) {
    this.ngOnInit();
  }

  async ngOnInit(): Promise<void> {
    const dt = new Date().toISOString();
    this.liturgyData = this.storage.get<TLiturgyResponse>(`liturgy-${dt}`);
    if (!this.liturgyData.dia) {
      this.liturgyData = await this.http.getLiturgy();
      this.storage.save(`liturgy-${dt}`, this.liturgyData);
      this._setTexts();
    } else {
      this._setTexts();
    }
    }

  private _setTexts(): void {
    this.firstReading = this.liturgyData.primeiraLeitura.referencia;
    this.secondReading = this.liturgyData.segundaLeitura.referencia;
    this.psalm = this.liturgyData.salmo.referencia;
    this.evangelion = this.liturgyData.evangelho.referencia;
    let strArr = this.liturgyData.evangelho.texto.split('.').map(txt => `\n${txt}\n`);
    this.evangelionText = strArr.join("")
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
