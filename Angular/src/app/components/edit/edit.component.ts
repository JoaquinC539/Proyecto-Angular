import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/projects.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title:string;
  public project: Project;
  public save_project:any;
  public status:boolean;
  public filesToUpload: File[];
  public url:string
  public id:string
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route:ActivatedRoute,
    private _router:Router
    ) {
    this.title="Editar proyecto";
    this.project= new Project('','','','',2022,'','');
    this.status=false;
    this.filesToUpload=[];
    this.url=Global.url;
    this.id=""
     }

 ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      var id=params['id'];
      
      
      

     this.getProject(id);
    });
}

getProject(id:any){
  this._projectService.getProject(id).subscribe(
    response=>{
     this.project=response.project;
  this.id=response.project._id;
    
    },
      
     
    error=>{console.log(error);
    
    }
    )
}

onSubmit(form:any){
  this._projectService.updateProject(this.project).subscribe(
    response=>{
      console.log("hay response");
      this.project=response.project;

      this.status=true;
      
         

        //Subir la imagen

        this._uploadService.MakeFileRequest(Global.url+"upload-image/"+this.id,[],this.filesToUpload,'image')
        .then((result:any)=>{
          console.log("se trato de subir imagen")
          this.save_project=response.project;
          

        });

      }
       ,
    
    error=>{console.log(error);
    }
    );

  

}

    fileChangeEvent(fileInput:any){
      this.filesToUpload=<Array<File>>fileInput.target.files;
      //this.filesToUpload=File[]fileInput.target.files;
    }







}



    


