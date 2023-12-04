import { Injectable } from "@angular/core";
import { Http, Connectivity, Dialogs } from "@nativescript/core";
import {
  IHttpClientMethods,
  TEvangelionRecord,
  TEvangelionResponse,
  TLiturgyResponse,
} from "../typedefs/global-types.defs";

@Injectable({ providedIn: "root" })
export class HttpServices implements IHttpClientMethods {
  private readonly _baseUrl: string =
    "https://www.abibliadigital.com.br/api/verses/acf/";
  private readonly _userToken: string = "";
  private _connectionType: number = -1;
  private readonly _liturgyUrl: string = "https://liturgiadiaria.site/";

  /* *
   * Returns a mistery evangelion text.
   * @param {TEvangelionRecord} object
   * @Returns {Promise<string>} evangelion text.
   * **/
  async getText({
    book,
    end,
    start,
    chapter,
  }: TEvangelionRecord): Promise<string> {
    if (this.checkConnection()) {
      try {
        const response = await Http.request({
          url: `${this._baseUrl}${book}/${chapter}`,
          method: "GET",
          headers: { Authorization: `Bearer ${this._userToken}` },
        });
        const resultJson = response.content?.toJSON() as TEvangelionResponse;
        let stringResult = "";
        resultJson.verses.forEach((verse) => {
          if (verse && verse.number >= start && verse.number <= end) {
            stringResult += verse.text + "\n";
          }
        });
        return stringResult;
      } catch (error) {
        Dialogs.alert({
          title: "Erro",
          message: "Erro ao requisitar dados do servidor",
          okButtonText: "ok",
        });
        throw error;
      }
    } else {
      Dialogs.alert({
        title: "Erro",
        message: "Não há conexão de rede para efetuar a requisição!",
        okButtonText: "ok",
      });
      throw new Error("No Internet Connection Error!");
    }
  }

  /* *
   * Returns diary ligurgy.
   * @Returns {TLiturgyResponse} object - with liturgy data.
   * */
  async getLiturgy(): Promise<TLiturgyResponse> {
    try {
      const resultString = await Http.request({
        url: this._liturgyUrl,
        method: "GET",
      });
      return resultString.content?.toJSON() as TLiturgyResponse;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  private checkConnection(): boolean {
    this._connectionType = Connectivity.getConnectionType();
    if (this._connectionType > 0 && this._connectionType !== 4) {
      return true;
    } else {
      return false;
    }
  }
}
