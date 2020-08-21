import { Injectable } from '@angular/core';

import { Resolve, Router } from '@angular/router';

import { ProjectsServiceService } from '../services/projects-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Projects } from './projects';
//import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProjectDetailsFromUrlResolver implements Resolve<any> {
    projectUrlId: number;
    project: Projects;
    constructor(private _projectService: ProjectsServiceService,
        private _route: ActivatedRoute,
        private _router: Router) { }

    resolve(r: ActivatedRouteSnapshot) {
        this.projectUrlId = r.params['id'];
        if (isNaN(this.projectUrlId)) {
            this._router.navigateByUrl('/');
        } else {
            this._projectService.getProjectId(this.projectUrlId).subscribe(data => { }, (err) => {
                this._router.navigateByUrl('/');
            })
            return this._projectService.getProjectId(this.projectUrlId);
        }
    }
}
