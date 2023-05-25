import { TestBed } from '@angular/core/testing';

import { QuizzQuestionsDataService } from './quizz-questions-data.service';

describe('QuizzQuestionsDataService', () => {
  let service: QuizzQuestionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzQuestionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
