import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
        <h1>Root Component</h1>

        <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
          <p>{{ test }}</p>
        </app-lifecycle>
        <button (click)="delete = true">Delete</button>
        <button (click)="test = 'Changed value'">Change Content</button>
        <button (click)="boundValue = 2000">Change Binding</button>

  `
})

export class AppComponent {

  delete = false;
  test = 'Starting value!';
  boundValue = 1000;

  title = 'Maybe this app works!';
}
