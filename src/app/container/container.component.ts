import { Component } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleTabComponent } from '../article-tab/article-tab.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TagListComponent, ArticleListComponent, ArticleTabComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
