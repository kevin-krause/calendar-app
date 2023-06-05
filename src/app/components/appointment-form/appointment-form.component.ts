import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private calendarService: CalendarService
  ) {}

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: [null, Validators.required],
    });
  }

  addAppointment() {
    if (this.appointmentForm.valid) {
      const title = this.appointmentForm.value.title;
      const date = this.formatDate(this.appointmentForm.value.date);
      this.calendarService.addAppointment({ title, date });
      this.appointmentForm.reset();
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padNumber(date.getMonth() + 1);
    const day = this.padNumber(date.getDate());
    return `${year}, ${month}, ${day}`;
  }

  padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
