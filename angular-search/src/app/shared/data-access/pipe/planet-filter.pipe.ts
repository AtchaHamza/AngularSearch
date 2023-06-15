import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../objects/planet';

@Pipe({
  name: 'planetFilter',
  standalone: true
})
export class PlanetFilterPipe implements PipeTransform {

  transform(planets: Planet[], searchText: string): Planet[] {
    if (!planets) return []
    if (!searchText) return planets
    searchText = searchText.toLowerCase()

    return planets.filter( it => {
      return it.name.toLowerCase().includes(searchText)
    })
  }
}
