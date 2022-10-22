import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/projects.service';
import {Global} from '../../services/global';
import {Router,ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]

})
export class DetailComponent implements OnInit {
  public url:string;
  public project:Project;
  public confirm:boolean;
  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
    ) {
    this.url=Global.url;
    this.project=new Project('','','','',2022,'','');    
    this.confirm=false;
     }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      var id=params['id'];
      
      

     this.getProject(id);
    });
}

setConfirm(confirm:boolean){
  this.confirm=confirm;
}

getProject(id:any){
  this._projectService.getProject(id).subscribe(
    response=>{this.project=response.project,console.log(this.project)},
    error=>{console.log(error)}
    )
}
deleteProject(id:any){
  this._projectService.deleteProject(id).subscribe(
    response=>{if(response.project){this._router.navigate(['/proyectos']);}},
    error=>{console.log(error)}
    )
}  
}