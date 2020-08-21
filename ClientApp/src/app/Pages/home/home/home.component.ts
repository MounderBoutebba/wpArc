import { CommonServiceService } from './../../../services/common-service.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';
import { Constants } from 'src/app/constant';
import { UrlSegment } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  languages: string[] = ["FRA", "ENG", "ARA"]
  selectedLanguage: string;
  images: any;
  imagesTotalPagesNumber: number;
  url: string;
  IntroduceSectionImage: string;
  testimonialSectionImage: string;
  pageNumber: number;
  latitude: number = 36.336528
  longitude: number = 6.582112

  constructor(public translate: TranslateService, private _projectService: ProjectsServiceService, private _commonService: CommonServiceService) {
    this.pageNumber = 1;
  }

  ngOnInit() {
    // Selected Language
    this._commonService.currentLanguage.subscribe(lng => this.selectedLanguage = lng)

    this._projectService.getMedia().subscribe((result: HttpResponse<any>) => {
      this.imagesTotalPagesNumber = result.headers["X-WP-TotalPages"];
      this.images = result.body;
      for (let im in this.images) {
        this.url = this.images[im].guid.rendered;
        if (this.url.includes(Constants.introduceSectionImageFolderName, 30))
          this.IntroduceSectionImage = this.url;
        if (this.url.includes(Constants.testimonialSectionImageFolderName, 30))
          this.testimonialSectionImage = this.url;
      }
      if (this.imagesTotalPagesNumber > 1) {
        for (let i = this.pageNumber; i < this.imagesTotalPagesNumber; i++) {
          this._projectService.getImages(i).subscribe((data) => {
            this.images = data;
            for (let im in this.images) {
              this.url = this.images[im].guid.rendered;
              if (this.url.includes(Constants.introduceSectionImageFolderName, 30))
                this.IntroduceSectionImage = this.url;
              if (this.url.includes(Constants.testimonialSectionImageFolderName, 30))
                this.testimonialSectionImage = this.url;
            }
          })
        }
      }
    })
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
