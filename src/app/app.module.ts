import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule, AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { WordService } from './app.service';
import { FSWords } from './fswords.component';

@NgModule({
  declarations: [
    AppComponent,
    FSWords
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [{ provide: 'fswords', useClass: WordService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
