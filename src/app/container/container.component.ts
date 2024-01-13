import { Component } from '@angular/core';

import { ArticleListComponent } from '../article-list/article-list.component';

import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';
import { ArticleTabComponent } from '../article-tab/article-tab.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ArticleTabComponent, TagSidebarComponent, ArticleListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
