import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Projects } from 'src/app/costumClasses/projects';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']

})
export class ProjectDetailsComponent implements OnInit {

  public carouselTileItems: Array<any> = [
    'assets/images/bg/bg.jpg',
    'assets/images/bg/bg1.jpg',
    'assets/images/bg/bg2.jpg',
    'assets/images/bg/bg2-2.jpg',
    'assets/images/bg/bg2-3.jpg',
    'assets/images/bg/bg2-4.jpg',
    'assets/images/bg/bg2-5.jpg',
    'assets/images/bg/bg2-6.jpg',
    'assets/images/bg/bg3.jpg',
    'assets/images/projects/1-1920x1080.jpg',
    'assets/images/projects/1-1920x1080.jpg'
  ]
  project: Projects;
  ngOnInit() {
    // this.loadScript("../../../assets/js/scripts.js");
    this.loadScript("../../../assets/js/rev-slider-init.js");

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
  // carouselConfig: NguCarouselConfig = {
  //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
  //   load: 3,
  //   interval: { timing: 4000, initialDelay: 1000 },
  //   loop: true,
  //   touch: true,
  //   velocity: 0.2,

  // }

  constructor(private _projectService: ProjectsServiceService, private _route: ActivatedRoute, private _router: Router) {
    if (this._projectService.smallDetailsIsClicked) {
      this.project = this._projectService.projectDetails;
    }
    else {
      this.project = new Projects(_route.snapshot.data.projectsDetails);

      if (this.project == null) {
      } else {
        this._projectService.projectDetails = this.project;
      }

    }
  }

  // ngAfterViewInit() {
  //   this.cdr.detectChanges();
  //   // this.carouselTileItems[0].string

  // }


}