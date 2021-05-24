import { Component, OnInit } from '@angular/core';

import { Group } from '../interfaces/group';

import { GROUPS } from '../mock-data/mock-groups';

@Component({
    selector: 'my-groups',
    styleUrls: ['./groups.component.css'],
    templateUrl: './groups.component.html'
})
export class GroupsComponent implements OnInit {
  
  groups: Group[] = [];

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.groups = GROUPS;
  }
}
