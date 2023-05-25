import { Question } from "./question.model"

export class Quizz {
    title: string = ''
    questions: Question[] = []
    results: { A: string, B: string } = { A: '', B: '' }
}
