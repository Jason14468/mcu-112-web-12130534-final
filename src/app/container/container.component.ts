import { Component } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
