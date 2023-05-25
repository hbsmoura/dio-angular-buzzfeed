import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModaUtilService {

  constructor() { }

  static getModa<T>(answerResults: T[]): T {

    return Array.from(new Set(answerResults)).reduce(
        (prev, curr) =>
        answerResults.filter(f => f === prev).length > answerResults.filter(f => f === curr).length ?
        prev : curr, 0 as T
    )
  }
}
