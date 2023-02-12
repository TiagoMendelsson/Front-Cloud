import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interfaceMenu } from './interfaceMenu';

@Component({
  selector: 'app-lucaspage',
  templateUrl: './lucaspage.component.html',
  styleUrls: ['./lucaspage.component.css']
})
export class LucaspageComponent implements OnInit{
  menuLista:Array<interfaceMenu>
  

  constructor() {
    // constructor called first time before the ngOnInit()
    this.menuLista=[
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa',selecionado:false},
      {imagem:'assets/Caminho 38699.svg',nome:'Missão', selecionado:true},
      {imagem:'assets/Caminho 38699.svg',nome:'Configurações', selecionado:true},
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa'},
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa'},
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa'},
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa'},
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa'},
      {imagem:'assets/Caminho 38699.svg',nome:'Mapa'},

  ]
    
  }

 ngOnInit() {
    // called after the constructor and called  after the first ngOnChanges() 
 }


}
