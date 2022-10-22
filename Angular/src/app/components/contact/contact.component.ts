import { Component, OnInit, ViewChild } from '@angular/core';
declare var jQuery:any;
declare var $:any

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:any;
  public anchuraToSlider:any;
  public captions:boolean
  public autor:any

  @ViewChild('textos',{static:true}) textos:any;


  constructor() { 
    this.widthSlider=null;
    this.anchuraToSlider=null;
    this.captions=true;
    this.autor=null;

  }

  ngOnInit(): void {
   //alert(document.getElementById('#texto').innerHTML);
      

      console.log(this.textos.nativeElement.textContent)

  }

  cargarSlider(){
    this.anchuraToSlider=null;
    this.anchuraToSlider=this.widthSlider;
  }

  resetearSlider(){
    this.widthSlider=null;
    this.anchuraToSlider=null;
  }
  getAutor(event:any){
    this.autor=event;
  }

}
