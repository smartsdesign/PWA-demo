import { Component, OnInit, Inject } from '@angular/core';
import { IWords } from './words';

@Component({
    selector: 'fs-words',
    templateUrl: './fswords.component.html'
})
export class FSWords implements OnInit {
    public status: any = {
      isFirstOpen: true,
      isFirstDisabled: false
    }
    public oneAtATime: boolean = true;
    private words: IWords[] = [];
    private errorMessage: string = '';

    constructor(@Inject ('fswords') private fswords){}

    ngOnInit() {
        this.getAllWords();
    }

    getAllWords() {
        this.fswords
            .getWords()
            .subscribe(
                q => this.words = q,
                e => this.errorMessage = e,
                () => {
                    const words = this.words;
                    console.log({words});
                    console.log('done');
                });
    }
}