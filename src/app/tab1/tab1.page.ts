import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tester = [
    { giphy_id: '3kHBUxaBZSSk4x3j3x' },
    { giphy_id: '3kHBUxaBZSSk4x3j3x' }
  ];

  test = 'test';

  trackByFn(index, item) {
    console.log(index);
    return index; // or item.id
  }
}
