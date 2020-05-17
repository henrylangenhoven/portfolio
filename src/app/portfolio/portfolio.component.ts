import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from './project.model';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'hl-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  @ViewChild('portfolioModalComponent', { static: false }) portfolioModalComponent: PortfolioModalComponent;
  projects: Observable<Project[]> = of([]);

  private projectsCollection: AngularFirestoreCollection<Project>;
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.projectsCollection = this.afs.collection<Project>('projects');
    this.projects = this.projectsCollection.valueChanges();
  }

  changeProject(project: Project): void {
    // TODO show project modal
    this.portfolioModalComponent.project = project;
  }
}
