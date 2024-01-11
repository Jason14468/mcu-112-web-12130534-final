import { Component } from '@angular/core';

import { ArticleListComponent } from '../article-list/article-list.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TagListComponent, ArticleListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
