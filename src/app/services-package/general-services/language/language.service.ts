import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {language} from '../../../shared/language-translation/language';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class LanguageService {

    languagesDir = {
        en: 'ltr',
        ar: 'rtl',
        de: 'ltr'
    };

    selectedLanguage: string = 'en';

    private rtlStylesFiles: string[] = [
        'assets/my-styles/styles-rtl/bootstrap-rtl.min.css',
        'assets/my-styles/styles-rtl/style-rtl.css'
    ];

    languageChanged: Subject<string> = new Subject<string>();

    constructor(@Inject(DOCUMENT) private doc) {
        this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        localStorage.setItem('selectedLanguage', this.selectedLanguage);

        this.changeStyle(this.languagesDir[this.selectedLanguage]);

        this.languageChanged.subscribe((res: string) => {
            if (localStorage.getItem('selectedLanguage') !== res) {
                localStorage.setItem('selectedLanguage', res);
                location.reload();
            }
        });
    }

    getSelectedLanguage() {
        return this.selectedLanguage;
    }

    getLang(value: string, args?: any): any {
        if (language[value]) {
            let trans = language[value][this.selectedLanguage];
            if (trans && args)
            {
                Object.keys(args).forEach(key => {
                    trans = trans.replace('{{' + key + '}}',args[key]);
                });
            }
            return trans;
        }
        return value;
    }

    changeStyle(selectedStyle: string) {
        this.doc.dir = selectedStyle;
        this.doc.lang = this.selectedLanguage;
        if (selectedStyle === 'rtl') {
            for (let i = 0; i < this.rtlStylesFiles.length; i++) {
                const linkEl = document.createElement('link');
                linkEl.setAttribute('rel', 'stylesheet');
                linkEl.setAttribute('media', 'screen,print');
                linkEl.setAttribute('href', this.rtlStylesFiles[i]);
                document.head.appendChild(linkEl);
            }

        }
        // else {
        //   for (let i = 0; i < this.rtlStylesFiles.length; i++) {
        //     let link = document.querySelector('link[href="' + this.rtlStylesFiles[i] + '"]');
        //     if (link) {
        //       link.remove();
        //     }
        //   }
        //   document.body.classList.remove('rtl-text');
        // }
    }
}
