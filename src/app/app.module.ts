import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizzInputComponent } from './quizz-input/quizz-input.component';
import { QuizzQuestionCodeComponent } from './quizz-question-code/quizz-question-code.component';
import { QuizzQuestionCodeInputComponent } from './quizz-question-code-input/quizz-question-code-input.component';
import { QuizzAnswerCodeComponent } from './quizz-answer-code/quizz-answer-code.component';
import { QuizzAnswerCodeInputComponent } from './quizz-answer-code-input/quizz-answer-code-input.component';
import { QuizzListComponent } from './quizz-list/quizz-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    QuizzComponent,
    QuizzInputComponent,
    QuizzQuestionCodeComponent,
    QuizzQuestionCodeInputComponent,
    QuizzAnswerCodeComponent,
    QuizzAnswerCodeInputComponent,
    QuizzListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
