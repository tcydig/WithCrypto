import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {Title, Meta} from "@angular/platform-browser";
import { filter, map, mergeMap } from 'rxjs/operators';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options: AnimationOptions = {
    path: '../assets/Animation - 1693556957349.json',
  };

  title = 'WithCrypto';
  constructor(public router: Router, private route: ActivatedRoute, private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    //app.route.tsからmeta tagデータを引っ張り出してくるメソッド
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)).subscribe((event) => {
        this.updateDescription(event['description'], event['keywords'], event['title'], event['twittercard'], event['twittersite'], event['twitterimage'], event['url']);
      });
  }

   // metaタグをアップデートするメソッド
   updateDescription(desc: string, keywords: string, title: string, twittercard: string, twittersite: string, twitterimage: string, url: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ name: 'keywords', content: keywords })
    this.meta.updateTag({ name: 'twitter:card', content: twittercard })
    this.meta.updateTag({ name: 'twitter:site', content: twittersite })
    this.meta.updateTag({ property: 'og:url', content: url })
    this.meta.updateTag({ property: 'og:title', content: title })
    this.meta.updateTag({ property: 'og:description', content: desc })
    this.meta.updateTag({ property: 'og:image', content: twitterimage })
   }

}
