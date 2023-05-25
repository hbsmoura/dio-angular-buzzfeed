import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question.model';
import { Quizz } from 'src/app/model/quizz.model';
import { ModaUtilService } from 'src/app/services/moda.util.service';
import { QuizzQuestionsDataService } from 'src/app/services/quizz-questions-data.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
    quizz: Quizz = new Quizz
    questionSelected: Question = new Question
    answers: string[] = []
    result: string = ''

    isFinished: boolean = false

    constructor(private dataService: QuizzQuestionsDataService){}

    ngOnInit(): void {
        this.quizz = this.dataService.getQuizz();
        this.questionSelected = this.quizz.questions[0]
    }

    next(alias: string): void {
        this.answers.push(alias)

        if(this.answers.length < this.quizz.questions.length) {
            this.questionSelected = this.quizz.questions[this.answers.length]
            return
        }

        const moda = ModaUtilService.getModa(this.answers)
        this.result = this.quizz.results[moda as keyof typeof this.quizz.results]
        this.isFinished = true

    }

}
