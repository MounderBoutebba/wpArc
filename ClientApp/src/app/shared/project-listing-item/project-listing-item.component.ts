import { Projects } from 'src/app/costumClasses/projects';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsServiceService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-project-listing-item',
  templateUrl: './project-listing-item.component.html',
  styleUrls: ['./project-listing-item.component.scss']
})
export class ProjectListingItemComponent implements OnInit {
  @Input() project: Projects;
  constructor(private _router: Router, private _projectService: ProjectsServiceService) { }

  ngOnInit() {
  }

  getDetails() {
    this._projectService.projectDetails = this.project;
    this._projectService.smallDetailsIsClicked = true;
    this._router.navigateByUrl("project-details/" + this.project.id);
  }
}
