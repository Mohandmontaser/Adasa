import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { BlogDetails } from './blog-details/blog-details';
import { BlogPosts } from './blog-posts/blog-posts';
import { Privacy } from './privacy/privacy';
import { NotfoundPage } from './notfound-page/notfound-page';
import { Terms } from './terms/terms';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  
    { path: 'home', component: Home, title: 'Home' },
  
    { path: 'blog', component: Blog, title: 'Blog' ,  children: [
      {
        path: '',
        component: BlogPosts
      },
      {
        path: 'إضاءة',
        component: BlogPosts
      },
      {
        path: 'بورتريه',
        component: BlogPosts
      },
      {
        path: 'مناظر-طبيعية',
        component: BlogPosts
      },
      {
        path: 'تقنيات',
        component: BlogPosts
      },
      {
        path: 'معدات',
        component: BlogPosts
      }
    ]},
  
    { path: 'blog/:slug', component: BlogDetails, title: 'Blog Details' },
  
    { path: 'about', component: About, title: 'About' },
    { path: 'privacy', component: Privacy, title: 'privacy' },
    { path: 'terms', component: Terms, title: 'terms' },
    { path: '**', component: NotfoundPage, title: 'Not found Page' },
  ];