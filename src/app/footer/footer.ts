import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SiteInfo } from '../site-info';


@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  siteInfo: SiteInfo = {
    name: 'عدسة',
    tagline: 'عالم التصوير الفوتوغرافي',
    description:
      'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.',
    email: 'hello@adasah.com',
    social: {
      twitter: 'https://twitter.com/adasah',
      github: 'https://github.com/adasah',
      linkedin: 'https://linkedin.com/company/adasah',
      youtube: 'https://youtube.com/@adasah'
    }
  };
}
