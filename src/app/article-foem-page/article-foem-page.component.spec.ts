import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFoemPageComponent } from './article-foem-page.component';

describe('ArticleFoemPageComponent', () => {
  let component: ArticleFoemPageComponent;
  let fixture: ComponentFixture<ArticleFoemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleFoemPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleFoemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
