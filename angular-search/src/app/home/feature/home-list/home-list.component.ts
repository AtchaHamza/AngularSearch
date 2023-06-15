import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../../ui/home-header/home-header.component';
import { HomeListItemComponent } from '../../ui/home-list-item/home-list-item.component';
import { planets } from 'src/assets/data/planets';
import { Planet } from 'src/app/shared/data-access/objects/planet';
import { PlanetFilterPipe } from 'src/app/shared/data-access/pipe/planet-filter.pipe';

@Component({
    selector: 'app-home-list',
    standalone: true,
    templateUrl: './home-list.component.html',
    styleUrls: ['./home-list.component.scss'],
    imports: [CommonModule, HomeHeaderComponent, HomeListComponent, HomeListItemComponent, PlanetFilterPipe]
})
export class HomeListComponent {
  planetArr : Planet[] = planets
  searchText : string  = ''

  onSearchTextChanged(searchText : string){
    this.searchText = searchText
  }
}
