
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { posts } from '../data/post';

@Component({
  selector: 'app-blog-posts',
  imports: [RouterLink],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.css'
})
export class BlogPosts {

  posts = posts;
  category = '';
  page = 1;
  viewMode = 'grid';
  postsPerPage = 6;

  constructor(private route: ActivatedRoute) {
    this.category = this.route.snapshot.url[0]?.path || '';
  }

  get filteredPosts() {
    return this.posts.filter(
      (p) => this.category === '' || p.category === this.category.replace('-', ' ')
    );
  }

  get totalPages() {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
  }
}
