import { Component, } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [TranslateModule,NgIf],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {
  constructor(private translate: TranslateService) {
    // Set default language
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  
}
