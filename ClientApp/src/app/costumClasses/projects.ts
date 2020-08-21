export class Projects {
    id: number;
    title: string;
    content: string;
    client: string;
    imageUrl: string;
    completion: Date;
    type: string;
    //facebook_link: string;

    constructor(projectResponse: any) {
        this.id = projectResponse.id;
        this.title = projectResponse.title.rendered;
        this.content = projectResponse.content.rendered;
        this.client = projectResponse.acf.clients;
        this.imageUrl = projectResponse.acf.images;
        this.completion = projectResponse.acf.completion;
        this.type = projectResponse.acf.project_type;
        //this.facebook_link = projectResponse.acf.facebook_link;
    }
}