import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfig } from './app.config';
import { LayoutService } from '../service/layout.service';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule, AppConfig, AvatarModule],
  template: `
    <div class="topbar-container">
      <div class="topbar-brand">
   <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="24px" fill="none"><g clip-path="url(#logo_inline_svg__a)"><g filter="url(#logo_inline_svg__b)"><path fill="#96F" fill-rule="evenodd" d="M15.142 2.285c-1.071 1.548-1.58 2.336-1.58 2.444 0 .11 1.305 2.04 4.288 6.34 2.36 3.398 4.457 6.416 4.662 6.706l.374.527.595-1.212c.804-1.64 1-2.12 1.152-2.83.31-1.45.047-3.192-.668-4.43-.201-.348-6.763-9.474-6.993-9.726C16.92.047 16.842 0 16.8 0s-.788 1.028-1.658 2.285m-2.844 7.721c-1.473.294-2.905 1.103-3.797 2.145-.694.81-8.493 11.53-8.497 11.68L0 23.98l3.409.015c2.85.013 3.423.002 3.497-.068.048-.045.992-1.305 2.097-2.8s2.028-2.717 2.05-2.717c.023 0 .416.596.873 1.325.926 1.475 1.347 2.035 1.88 2.5 1.154 1.01 2.566 1.592 4.151 1.712.368.028 4.124.033 8.346.012 7.09-.036 7.678-.046 7.697-.138.022-.108-3.437-5.197-3.647-5.367-.122-.098-.676-.104-9.688-.104-5.257 0-9.556-.02-9.554-.045s1.357-1.868 3.012-4.096 3.002-4.059 2.993-4.069c-.04-.044-3.085-.249-3.65-.245-.35.002-.867.051-1.168.111" clip-rule="evenodd"></path></g><path fill="#fff" fill-rule="evenodd" d="M97.135 4c-5.211 0-8.893 3.663-8.893 9s3.527 9 8.892 9c5.366 0 8.867-3.532 8.867-9s-3.656-9-8.867-9m0 2.695c3.551 0 5.936 2.485 5.936 6.305s-2.385 6.305-5.936 6.305S91.198 16.82 91.198 13s2.385-6.305 5.937-6.305M41.32 7.14h-5.248A.073.073 0 0 1 36 7.067V4.465c0-.04.032-.073.072-.073h13.57c.04 0 .072.033.072.073v2.602c0 .04-.033.073-.072.073h-5.274a.073.073 0 0 0-.072.072v14.322c0 .04-.033.073-.073.073h-2.759a.073.073 0 0 1-.072-.073V7.212a.073.073 0 0 0-.072-.072m9.764-2.747h9.784c.04 0 .072.032.072.073v2.6c0 .04-.032.074-.072.074h-6.88a.073.073 0 0 0-.073.073v4.223c0 .04.033.073.073.073h6.621c.04 0 .073.032.073.073v2.627c0 .04-.033.073-.073.073h-6.621a.073.073 0 0 0-.073.073v4.432c0 .04.033.073.073.073h7.114c.04 0 .072.033.072.073v2.602c0 .04-.032.073-.072.073H51.084a.073.073 0 0 1-.072-.073V4.465c0-.04.032-.072.072-.072M66.99 14.517c1.218 0 2.048.654 2.54 2.014l1.746 5.028c.01.029.037.049.068.049h3.007a.073.073 0 0 0 .068-.099l-2.063-5.605c-.463-1.278-1.247-2.095-2.329-2.47-.064-.023-.066-.115 0-.138 1.962-.697 2.978-2.301 2.978-4.272 0-2.774-2.049-4.631-5.47-4.631h-4.931a.073.073 0 0 0-.073.073v17.068c0 .04.033.073.073.073h2.758c.04 0 .073-.033.073-.073V14.59c0-.04.032-.073.072-.073zm3.06-5.023c0 1.518-.986 2.538-2.567 2.538h-1.976a.073.073 0 0 1-.072-.073V7.108c0-.04.032-.073.072-.073h1.95c1.556 0 2.593.968 2.593 2.46m5.286 10.513q0-.022.012-.04l7.687-11.441.857-1.273a.073.073 0 0 0-.06-.113h-8.19a.073.073 0 0 1-.072-.073V4.466c0-.04.032-.073.072-.073h12.506c.04 0 .072.032.072.073v1.526q0 .024-.012.04L80.495 17.5l-.831 1.247a.073.073 0 0 0 .06.113h8.424c.04 0 .072.033.072.073v2.602c0 .04-.032.073-.072.073h-12.74a.073.073 0 0 1-.072-.073z" clip-rule="evenodd"></path></g><defs><clipPath id="logo_inline_svg__a"><path fill="#fff" d="M0 0h106.001v24H0z"></path></clipPath><filter id="logo_inline_svg__b" width="93.429" height="83.429" x="-29.714" y="-26.743" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2.971"></feOffset><feGaussianBlur stdDeviation="14.857"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.631729 0 0 0 0 0.276415 0 0 0 0 0.999964 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1898_4693"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_1898_4693" result="shape"></feBlend></filter></defs></svg>
        <span class="topbar-brand-text">
          <span class="topbar-title">Terzo PrimeNG Demo</span>
        </span>
      </div>
      <div class="topbar-actions">
        <p-button
          type="button"
          class="topbar-theme-button"
          (click)="toggleDarkMode()"
          text
          rounded
        >
          <i
            class="pi"
            [ngClass]="{
              'pi-moon': isDarkMode(),
              'pi-sun': !isDarkMode()
            }"
          ></i>
        </p-button>
        <p-avatar
          class="topbar-avatar-button"
          label="B"
          shape="circle"
          style="background:var(--primary-color,#7c3aed);color:#fff;font-weight:bold;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;"
        ></p-avatar>
        <div class="relative">
          <!-- <p-button
            pStyleClass="@next"
            enterFromClass="hidden"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
            [hideOnOutsideClick]="true"
            icon="pi pi-cog"
            text
            rounded
            aria-label="Settings"
          /> -->
          <app-config class="hidden" />
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'topbar',
  },
})
export class AppTopbar {
  layoutService: LayoutService = inject(LayoutService);

  isDarkMode = computed(() => this.layoutService.appState().darkMode);

  toggleDarkMode() {
    this.layoutService.appState.update((state) => ({
      ...state,
      darkMode: !state.darkMode,
    }));
  }
}
