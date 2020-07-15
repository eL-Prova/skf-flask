import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Project } from './manage.model';
import { projectData } from './data';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ProjectManageComponent implements OnInit {

  // bread crumb items
 breadCrumbItems: Array<{}>;

 projectData: Project[];

 constructor(private modalService: NgbModal) { }

 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Manage', active: true }];

   this.projectData = projectData;
 }
 /**
  * Open modal
  * @param content modal content
  */
  projectModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
 }