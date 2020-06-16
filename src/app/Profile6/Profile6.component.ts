import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Profile6',
  templateUrl: './Profile6.component.html',
  styleUrls: ['./Profile6.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Profile6Component {
  transform(items: any[]): any[] {
    if (!items) {
      return [];
    }
    
    const sortedItems = items.sort((itemA, itemB) => {
      if (itemA.status === 'locked' && itemB.status === 'unlocked') {
        return 1;
      } else if (itemA.status === 'unlocked' && itemB.status === 'locked') {
        return -1;
      } else {
        return 0;
      }
    })
    
    return sortedItems
    
  }
}
