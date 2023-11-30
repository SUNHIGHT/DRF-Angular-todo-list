import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-center">
      <span class="title">{{ title }}</span>
      <p class="sub-title">{{ subtitle }}</p>
    </h1>ああああああ
    <router-outlet></router-outlet>
  `,
  styles: [
    '.title { color: #ee6e73;}',
    '.sub-title { font-size: small; }'
  ],
})
export class AppComponent {
  title = 'Simple Todo';
  subtitle = 'Angular2 + Django Rest Framework';
}

// template: `
// <h1 class="text-center">
//   <span class="title">{{ title }}</span>
//   <p class="sub-title">{{ subtitle }}</p>
// </h1>ああああああ
// <router-outlet>いいいいいいいい</router-outlet>
// `,
