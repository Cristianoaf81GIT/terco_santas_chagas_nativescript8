import { Injectable } from '@angular/core';
import { Http,Connectivity, Dialogs } from '@nativescript/core';
import { IHttpClientMethods, TEvangelionRecord, TEvangelionResponse } from '../typedefs/global-types.defs';


@Injectable({providedIn: 'root'})
export class HttpServices implements IHttpClientMethods {

  private readonly _baseUrl: string = 'https://www.abibliadigital.com.br/api/verses/acf/';
  private readonly _userToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBOb3YgMTMgMjAyMyAyMzoyNzo1MCBHTVQrMDAwMC5jcmlzdGlhbm9hZjgxQGdtYWlsLmNvbSIsImlhdCI6MTY5OTkxODA3MH0.1_oESQlG7ggeeyXs_KpHbXtdeebD1RkQ8zD_u94tkuc';
  private _connectionType: number = -1;

  /* *
   * Returns a mistery evangelion text.
   * @param {TEvangelionRecord} object
   * @return {Promise<string>} string with evangelion text
   * **/
  async getText({ book, end, start, chapter }: TEvangelionRecord): Promise<string> {
    if (this.checkConnection()) {
       try {
        const response = await Http.request({
          url: `${this._baseUrl}${book}/${chapter}`,
          method: 'GET',
          headers: { 'Authorization': `Bearer ${this._userToken}` },
        });
        const resultJson = response.content?.toJSON() as TEvangelionResponse;
        let stringResult = '';
        resultJson.verses.forEach((verse) => {
          if (verse && verse.number >= start && verse.number <= end) {
            stringResult += verse.text + '\n';
          }
        });
        return stringResult;
      } catch (error) {
        Dialogs.alert({
          title: 'Erro',
          message: 'Erro ao requisitar dados do servidor',
          okButtonText: 'ok'
        });
        return "SEM DADOS PARA EXIBIÇÂO";
      }
    } else {
      Dialogs.alert({
        title: 'Erro',
        message: 'Não há conexão de rede para efetuar a requisição!',
        okButtonText: 'ok'
      });
     // throw new Error('No Internet Connection Error!');
      return "SEM CONEXÂO";
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
