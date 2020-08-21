import { Projects } from 'src/app/costumClasses/projects';
import { Constants } from './../constant';
import { HttpClient, HttpResponse, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  public projectDetails: Projects = null;
  public smallDetailsIsClicked = false;
  constructor(private _http: HttpClient) {

  }
  getMedia() {
    return this._http.get(Constants.baseUrlServer + 'Wordpress/wp-json/wp/v2/media?_envelope')
  }
  getImages(page: number) {
    return this._http.get(Constants.baseUrlServer + 'Wordpress/wp-json/wp/v2/media?page=' + page)
  }
  getProjectId(projectId: number) {
    return this._http.get(Constants.baseUrlServer + 'Wordpress/wp-json/wp/v2/projects/' + projectId)
  }
  getProjects() {
    return this._http.get(Constants.baseUrlServer + 'Wordpress/wp-json/wp/v2/projects')
  }
}
