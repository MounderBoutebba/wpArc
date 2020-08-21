import { ProjectsServiceService } from './../../services/projects-service.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Projects } from 'src/app/costumClasses/projects';
declare var $: any;
@Component({
  selector: 'app-project-listing-page',
  templateUrl: './project-listing-page.component.html',
  styleUrls: ['./project-listing-page.component.scss']
})
export class ProjectListingPageComponent implements OnInit {
  listProject: Array<Projects> = [];
  filtredProject: Array<Projects> = [];

  constructor(private _projectService: ProjectsServiceService,
    private _elementRef: ElementRef) {
    this.getProjects();
  }

  ngOnInit() {
  }

  async getProjects() {
    await this._projectService.getProjects().subscribe(data => {
      for (let project in data) {
        if (data.hasOwnProperty(project)) {
          let result = new Projects(data[project]);
          this.listProject.push(result);
        }
      }
      this.filterSelection("all");
    })
  }

  filterSelection(tag: string) {
    if (tag == "all") {
      this.filtredProject = this.listProject
    } else {
      this.filtredProject = this.listProject.filter((project) => {
        return project.type == tag;
      })
    }
  }
}
