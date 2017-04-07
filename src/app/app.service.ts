import { Injectable } from '@angular/core';
import { IWords } from './words';
import { Http, Response } from '@angular/http';
import { Observable } from 'Rxjs/Observable';

@Injectable()
export class WordService {
    
    private _wordsUrl = 'word-list.json';
    
    constructor(private _http: Http){}

    getWords(): Observable<IWords[]> {
        return this._http.get(this._wordsUrl)
            .map((response: Response) => response.json());
    }
}