import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.scss']
})
export class ParalaxComponent implements OnInit {
  title = "Our objectives";
  introduction = "Community dedicated to women Developers for the sharing of experiences and skills in Computer Science."+
      "\n" +
      "We're sharing many interesting articles and themes every week.\n" +
      "There will be also many topics for discussion.\n" +
      "Then, big events will be organized with workshops and conferences to make our followers evolves";
  greeting ="Welcome on geeka page!";

  constructor() { }

  ngOnInit() {
  }

}
