import { Component } from '@angular/core';
import { portfolio } from '../../data/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  portfolio = portfolio;

}