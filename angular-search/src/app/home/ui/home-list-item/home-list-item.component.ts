import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planet } from 'src/app/shared/data-access/objects/planet';

@Component({
  selector: 'app-home-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.scss']
})
export class HomeListItemComponent implements OnInit {
  @Input() planet !: Planet;
  imageSrc !: string

  ngOnInit(): void {
    this.imageSrc = "/src/assets/images/" + this.planet.image
  }

}
