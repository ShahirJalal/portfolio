import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  portfolio = portfolio;

}