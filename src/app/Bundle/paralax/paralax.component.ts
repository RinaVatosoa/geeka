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
