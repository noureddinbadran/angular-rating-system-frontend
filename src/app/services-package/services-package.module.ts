import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {LanguagePipe} from './general-services/language/language.pipe';
import {LanguageService} from './general-services/language/language.service';

@NgModule({
    declarations: [
      LanguagePipe,
    ],
    imports: [
        MaterialModule,

    ],
    providers: [
        LanguageService,

    ],
    exports: [
        MaterialModule,
        LanguagePipe,
    ]
})
export class ServicesPackageModule {
}