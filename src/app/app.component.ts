import { Component, OnInit, Inject } from '@angular/core';
import { IWords } from './words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  public title: string = 'Basic Farsi';
}
