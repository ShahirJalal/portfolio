import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  portfolio = portfolio;

}