import { Component } from '@angular/core';
import SiteData from '../../../../siteData';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div
      class="flex flex-col items-center justify-center gap-8 h-screen cursor-wait bg-stone-900 select-none"
      (contextmenu)="handleContextMenu($event)"
    >
      <h1
        class="text-5xl text-blue-500 transition-all hover:scale-105 hover:text-blue-700"
      >
        {{ siteData.title }}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        class="transition-colors text-stone-200 hover:text-blue-600 active:text-yellow-300"
      >
        <circle cx="4" cy="12" r="3" fill="currentColor">
          <animate
            id="svgSpinners3DotsScale0"
            attributeName="r"
            begin="0;svgSpinners3DotsScale1.end-0.25s"
            dur="0.8s"
            values="3;.2;3"
          />
        </circle>
        <circle cx="12" cy="12" r="3" fill="currentColor">
          <animate
            attributeName="r"
            begin="svgSpinners3DotsScale0.end-0.6s"
            dur="0.8s"
            values="3;.2;3"
          />
        </circle>
        <circle cx="20" cy="12" r="3" fill="currentColor">
          <animate
            id="svgSpinners3DotsScale1"
            attributeName="r"
            begin="svgSpinners3DotsScale0.end-0.45s"
            dur="0.8s"
            values="3;.2;3"
          />
        </circle>
      </svg>
      <h2
        class="text-4xl text-yellow-300 transition-all hover:scale-105 hover:text-yellow-500"
      >
        Redirecionando...
      </h2>
    </div>
  `,
})
export class HomeComponent {
  siteData = SiteData;
  timeoutId: any | undefined;
  ngOnInit() {
    if (this.siteData.redirect) {
      this.timeoutId = setTimeout(() => {
        window.location.href = this.siteData.redirectUrl;
      }, this.siteData.redirectTime);
    }
  }
  handleContextMenu(event: any) {
    event.preventDefault();
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      alert('Redirecionamento cancelado!');
    }
  }
}
