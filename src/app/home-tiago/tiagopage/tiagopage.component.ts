import { Component, ElementRef, ViewChild, OnInit, VERSION} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Canvas } from 'konva/lib/Canvas';
import { Element } from '@angular/compiler';
import { startWith } from 'rxjs';


@Component({
  selector: 'app-tiagopage',
  templateUrl: './tiagopage.component.html',
  styleUrls: ['./tiagopage.component.css']
})
export class TiagopageComponent {
 canvas:any
 ctx:any
  
 constructor(private el:ElementRef){
}
  ngAfterViewInit() {
    
  }
  ngOnInit() {
    this.canvas=this.el.nativeElement.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d');
    const image = new Image()
    image.src = 'assets/bokunohero.jpg'
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
    }

    const canvas = document.getElementById("canvas")

    this.canvas.width = window.innerWidth - 60;
    this.canvas.height = 400;
    
    
    let context = this.canvas.getContext("2d")
    let start_background_color = "white";
    context.fillStyle = start_background_color;
    context.fillRect(0,0, Canvas.width, Canvas.height);

    let draw_color = "black";
    let draw_width = "2";
    let is_drawing = false;
    
    let restore_array: any[]= [];
    let index = 1;
    
    function change_color(element: any) {
      draw_color = element.style.background;
    }

    this.canvas.addEventListener("touchstart", start, false);
    this.canvas.addEventListener("touchmove", draw, false);
    this.canvas.addEventListener("touchdown", start, false);
    this.canvas.addEventListener("touchmove", draw, false);

    function start(event: any) {
      is_drawing = true;

      context.beginPath();
      context.MoveTo( event.clientX - Canvas.offsetLeft,
                       event.clientY - Canvas.offsetTop);
      
      event.preventDefault();
    }

    function draw(event: any) {
      if (  is_drawing  ) {
        context.LineTo(event.clientX - Canvas.offsetLeft,
                      event.clientY - Canvas.offsetTop);

        context.strokeStyle =draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke ();
      }
      
    }
    function stop(event:any) {
      if (is_drawing) {
        context.stroke()
        context.closePath();
        is_drawing = false;
      }
      event.preventDefault();
      if (event.type != 'mouseout') {
        restore_array.push(context.getImageData(0,0, Canvas.width, Canvas.height));
        index += 1;
      
      }
      
    }

    function clear_canvas() {
      context.fillStyle = start_background_color;
      context.clearRect(0,0, Canvas.width, Canvas.height);
      context.fillRect(0,0, Canvas.width, Canvas.height);
      
      restore_array = [];
      index= -1;
    }

    function undo_last () {
      if (index <= 0) {
        clear_canvas();
      }else {
        index -= 1;
        restore_array.pop();
        context.putImageData(restore_array[index], 0, 0);
      }
    }

  }
  

  
}
