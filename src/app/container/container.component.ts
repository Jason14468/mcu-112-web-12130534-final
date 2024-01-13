import { Component } from '@angular/core';

import { ArticleListComponent } from '../article-list/article-list.component';

import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';
import { ArticleTabComponent } from '../article-tab/article-tab.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ArticleTabComponent,
    TagSidebarComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
