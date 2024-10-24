import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface Item {
  name: string;
  date: Date;
}

@Component({
  selector: 'app-date-picker-range',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTableModule,
    
  ],
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.css'],
})
export class DatePickerRangeComponent {
  form: FormGroup;
  
  // Example item list
  items: Item[] = [
    { name: 'Event 1', date: new Date('2024-10-01') },
    { name: 'Event 2', date: new Date('2024-10-05') },
    { name: 'Event 3', date: new Date('2024-11-01') },
    { name: 'Event 4', date: new Date('2024-11-15') },
  ];

  displayedColumns: string[] = ['name', 'date'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dateRange: this.fb.group({
        start: null, 
        end: null,   
      }),
    });
  }

  filteredItems(): Item[] {
    const dateRange = this.form.get('dateRange')?.value;
  
    if (!dateRange || !dateRange.start) {
      return this.items; // If no start date is selected, return all items
    }
  
    const startDate = new Date(dateRange.start.setHours(0, 0, 0, 0));
  
    return this.items.filter((item) => {
      const itemDate = new Date(item.date);
  
      // If endDate is null, consider all dates after the start date
      if (!dateRange.end) {
        return itemDate >= startDate;
      }
  
      const endDate = new Date(dateRange.end.setHours(23, 59, 59, 999));
  
      return itemDate >= startDate && itemDate <= endDate;
    });
  }
}
