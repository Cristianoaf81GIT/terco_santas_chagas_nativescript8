
export type TMisteriesNumber =  1 | 2 | 3 | 4 | 5;

export type TWeekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type TEvangelionRecord = {
  book: string;
  chapter: number;
  start: number;
  end: number;
  weekday: TWeekday;
}

export type TEvangelion = {
  [k : number]: TEvangelionRecord
};

export interface IHttpClientMethods {
  getText({ book, chapter, start, end }: TEvangelionRecord): Promise<unknown>;
}

export type TEvangelionResponse = {
  book: {
    abbrev: {
        pt: string,
        en: string,
    },
    name: string,
    author: string,
    group: string,
    version: string
  };
  chapter: {
    number: number,
    verses: number,
  };
  verses: Array<{number: number, text: string}>;
}

export declare type TMisteryText = {
  [k: string]: {
    [k: number]: string
  }
} & object;
