import { Injectable } from '@angular/core';
import { Quizz } from '../model/quizz.model';
import quizz_questions from '../../assets/data/quizz_questions.json'

@Injectable({
  providedIn: 'root'
})
export class QuizzQuestionsDataService {

  constructor() { }

  getQuizz(): Quizz {
    let quizz = new Quizz;

    quizz.title = quizz_questions.title
    quizz.results = quizz_questions.results;

    quizz.questions = quizz_questions.questions.map(q => ({
        statement: q.question,
        options: q.options.map(o => ({
            name: o.name, alias: o.alias
        }))
    }))

    return quizz
}
}
