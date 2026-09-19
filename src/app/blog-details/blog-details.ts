import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { posts } from '../data/post';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails implements OnInit {

  posts = posts;
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.post = this.posts.find(post => post.slug === slug);
    });
  }

  getSections() {
    return this.post?.content.split('\n\n') || [];
  }

  getHeadings() {
    return this.getSections()
      .filter((section: string) => section.startsWith('## '))
      .map((section: string, index: number) => ({
        id: `section-${index}`,
        title: section.replace('## ', '')
      }));
  }

  getRelatedPosts() {
    return this.posts
      .filter(
        post =>
          post.category === this.post?.category &&
          post.id !== this.post?.id
      )
      .slice(0, 3);
  }
}