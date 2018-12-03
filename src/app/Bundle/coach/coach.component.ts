import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {
    role="Coach"
    isa:any={
        img:"./assets/img/isa.jpg",
        name:"Isa"
    }
    niry:any={
        img:"./assets/img/niry.jpg",
        name:"Niry"
    }
    julien:any={
        img:"./assets/img/jul.jpg",
        name:"Julien"
    }

  constructor() { }

  ngOnInit() {
  }

}
