import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  quotes = "Teach a girl to code and she'll change the world !";
  roles ="Co-founder";
  team ="Geeka Girls Madagascar team";
  hantatiana:any = {
    img : "./assets/img/hantatiana.jpg",
    name : "Hantatiana"
  };
  maeva:any = {
    img : "./assets/img/maeva.jpg",
    name: "Maeva"
  };
  vony:any = {
    img:"./assets/img/vony.jpg",
    name:"Vony"
  };
  mickaella:any = {
    img:"./assets/img/mickaella.jpg",
    name:"Mickaella"
  };
  stephanie:any = {
    img:"./assets/img/stephanie.jpg",
    name:"Stéphanie"
  };
  onintsoa:any = {
    img:"./assets/img/onintsoa.jpg",
    name:"Onintsoa"
  };
  vatosoa:any = {
    img:"./assets/img/vato.jpg",
    name:"Vatosoa"
  };
  mendrika:any = {
    img:"./assets/img/mendrika.jpg",
    name:"Mendrika"
  };
  constructor() { }

  ngOnInit() {
  }

}
