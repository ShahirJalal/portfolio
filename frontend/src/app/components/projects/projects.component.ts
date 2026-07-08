import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  portfolio = portfolio;

}