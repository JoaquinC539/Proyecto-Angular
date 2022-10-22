import {Injectable} from '@angular/core';
import {Global} from './global';

@Injectable()
export class UploadService{
	public url:string

	constructor(){
		this.url=Global.url
	}
	MakeFileRequest(url:string,params: string[], files: File[], name:string){
		//Promesa para peticion AJAX
		return new Promise(function(resolve,reject){
			//Simula un formulario real
			var formData:any=new FormData();
			//Objeto para hacer la petición AJAX
			var xhr=new XMLHttpRequest();
			//Recorrer ficheros adjuntado
			for(var i=0; i<files.length;i++){
				//Añadir al formulario para enviar
				formData.append(name,files[i],files[i].name);	
			}
			//Comporbar estado de petición
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						//Resolución de petición
						resolve(JSON.parse(xhr.response));
						}else{
							reject(xhr.response);
						}
				}
			}
			//Hace la petición al POST
			xhr.open('POST',url,true);
			//Ejecuta la petición ajax
			xhr.send(formData);
		});

	}





}
