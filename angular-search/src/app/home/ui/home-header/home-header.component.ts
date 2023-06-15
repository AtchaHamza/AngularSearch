import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, BrowserAnimationsModule],
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }), 
            animate('1s ease-out', style({ width: 320, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: 320, opacity: 1 }),
            animate('1s ease-in', style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ] 
})
export class HomeHeaderComponent {
  toggleSearch : boolean = false
  searchText : string = ''

  @Output() searchTextChanged = new EventEmitter<string>();

  searchToggle(){
    this.toggleSearch = !this.toggleSearch
  }

  onSearchInput(){
    this.searchTextChanged.emit(this.searchText);
  }
}
