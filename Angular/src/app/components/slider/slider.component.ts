import { Component, OnInit, Input , Output,EventEmitter} from '@angular/core';
declare var jQuery:any;
declare var $:any

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() ancho:number;
  @Input('etiquetas') captions:boolean;
  @Output() conseguirAutor=new EventEmitter();
  public autor:any;


  constructor() {
  this.ancho=600;
  this.captions=false;
  this.autor={
    nombre: "Joaquin",
    web: "google.com",
    youtube: "no hay",
   };
  }

  ngOnInit(): void {
        $("#logo").click(function(e:any){
      e.preventDefault();
      $("header").css("background","green")
                  .css("height","50px");
    });

      $('.galeria').bxSlider({
    mode: 'fade',
    captions: this.captions,
    slideWidth: this.ancho,

  });
      
  }

  lanzar(event:any){

    this.conseguirAutor.emit(this.autor);
  }

}
