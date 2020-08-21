import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  route = false;
  constructor(location: Location, router: Router, public translate: TranslateService) {
    // Detect language from browser
    // var browserLang = translate.getBrowserLang();
    // let defaultLang = (browserLang != undefined) ?
    //   browserLang :
    //   'fr';
    let defaultLang = "fr"
    translate.addLangs(['en', 'fr', 'ar']);
    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang);
    router.events.subscribe(val => {
      if (location.path() == "") {
        this.route = true;
      }
    });
  }

  ngOnInit() {

    this.loadScript("../../../assets/js/scripts.js");
    // this.loadScript("../../../assets/js/rev-slider-init.js");


  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);

  }
}
