import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TranslateLoader } from '@ngx-translate/core';
import { Constants } from '../constant';
import { map } from "rxjs/operators";

@Injectable()
export class TranslationService implements TranslateLoader {

    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        return this.http.get(Constants.baseUrlServer + Constants.TranslationFilePath + lang + ".json")
            .pipe(map((response: JSON) => {
                debugger
                return response;
            }));
    }
}
