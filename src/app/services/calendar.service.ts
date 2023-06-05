import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  private appointments: any[] = [];

  constructor() {}

  addAppointment(appointment: any) {
    this.appointments.push(appointment);
  }

  getAppointments() {
    return this.appointments;
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  moveAppointment(previousIndex: number, currentIndex: number) {
    const appointment = this.appointments[previousIndex];
    this.appointments.splice(previousIndex, 1);
    this.appointments.splice(currentIndex, 0, appointment);
  }
}
