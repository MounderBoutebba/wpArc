import { CommonServiceService } from './../../../services/common-service.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  languages: string[] = ["FRA", "ENG", "ARA"]
  selectedLanguage: string;
  route = false;
  constructor(location: Location, router: Router, private translate: TranslateService, private _commonService: CommonServiceService) {
    router.events.subscribe(val => {
      if (location.path() == "") {
        this.route = true;
      }
    });
  }

  ngOnInit() {
    this._commonService.currentLanguage.subscribe(lng => this.selectedLanguage = lng)
  }

  onSelectLanguage(language: string) {
    this.selectedLanguage = language;
    switch (language) {
      case "ENG":
        this.translate.use('en');
        this._commonService.changeLanguage("ENG");
        break;
      case "FRA":
        this.translate.use('fr');
        this._commonService.changeLanguage("FRA");
        break;
      case "ARA":
        this.translate.use('ar');
        this._commonService.changeLanguage("ARA");
        break;
      default:
        break;
    }
  }
}
