import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideTranslation } from './translate/translate.config';

// Factory function to load translation files
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

// Configuration for translation
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAnimationsAsync(),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideAnimationsAsync(),
  ],
};
