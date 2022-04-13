/*import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LanguageService} from '../language/language.service';

@Injectable({ providedIn: 'root' })
export class AlertService {

    constructor(private toastr: ToastrService,private languageService: LanguageService) {
    }

    success(message: string) {
        this.toastr.success(this.languageService.getLang(message), this.languageService.getLang('Success'));
    }

    error(message: string) {
        this.toastr.error(this.languageService.getLang(message), this.languageService.getLang('Error'));
    }

    info(message: string) {
        this.toastr.info(this.languageService.getLang(message), this.languageService.getLang('Info'));
    }

    warning(message: string) {
        this.toastr.warning(this.languageService.getLang(message), this.languageService.getLang('Warning'));
    }
}
*/