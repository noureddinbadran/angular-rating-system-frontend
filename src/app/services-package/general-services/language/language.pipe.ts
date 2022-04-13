import {Pipe, PipeTransform} from '@angular/core';
import {LanguageService} from './language.service';

@Pipe({
    name: 'language'
})
export class LanguagePipe implements PipeTransform {

    constructor(
        public lang: LanguageService
    ) { }

    transform(value: string, args?: any): any {
        return this.lang.getLang(value);
    }
}
