import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DatePickerRangeComponent } from "./date-picker-range/date-picker-range.component";
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import { TranslateComponent } from "./translate/translate.component";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule, DatePickerRangeComponent, CommonModule, TranslateModule, TranslateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
  }
  title = 'Testapp';
}
