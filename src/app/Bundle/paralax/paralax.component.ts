import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import gql from 'graphql-tag';
import {Members,Query} from '../../types';

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.scss']
})
export class ParalaxComponent implements OnInit {
  members: Observable<Members[]>;
  constructor(private apollo:Apollo) {}
  title = "Our objectives";
  introduction = "Community dedicated to women Developers for the sharing of experiences and skills in Computer Science."+
      "\n" +
      "We're sharing many interesting articles and themes every week.\n" +
      "There will be also many topics for discussion.\n" +
      "Then, big events will be organized with workshops and conferences to make our followers evolves.";
  greeting ="Welcome on geeka page!";

  ngOnInit() {
    this.members = this.apollo.watchQuery<Query>({
        query: gql`
          query allMemberses {
            allMemberses {
              adresse,nom,prenom,nom
            }
          }
        `
    }).valueChanges.pipe(
        map(
            result=> result.data.allMemberses
        )
    )
  }

}
