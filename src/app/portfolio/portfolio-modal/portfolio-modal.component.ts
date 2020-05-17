import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'hl-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css'],
})
export class PortfolioModalComponent implements OnInit {
  project: Project;

  constructor() {}

  ngOnInit(): void {}
}
