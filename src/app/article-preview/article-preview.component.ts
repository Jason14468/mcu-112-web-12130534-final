import { NgFor } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [TagComponent, NgFor],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';
  tags = ['enim', 'repellat', 'est', 'eos'];
}
