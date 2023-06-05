import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragMove,
  CdkDragEnd,
  CdkDragStart,
} from '@angular/cdk/drag-drop';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];
  style: any = null;
  calendarDays: any[] = [];


  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.appointments = this.calendarService.getAppointments();
    this.calendarDays = this.generateCalendarDays(); 

    this.appointments.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  getAppointmentsForDay(date: Date): any[] {
    const dateString = date.toDateString(); 
    return this.appointments.filter(
      (appointment) => appointment.date.toDateString() === dateString
    );
  }

  generateCalendarDays(): any[] {
    const startDate = new Date(); 
    const daysInMonth = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0
    ).getDate();

    const calendarDays: any[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        i
      );
      const appointments = this.getAppointmentsByDate(currentDate);
      calendarDays.push({ date: currentDate, appointments: appointments });
    }

    return calendarDays;
  }

  getAppointmentsByDate(date: Date): any[] {
    return this.appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getFullYear() === date.getFullYear() &&
        appointmentDate.getMonth() === date.getMonth() &&
        appointmentDate.getDate() === date.getDate()
      );
    });
  }

  getAppointmentsByDay(day: string): any[] {
    return this.appointments.filter((appointment) => appointment.day === day);
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  updateAppointment(index: number) {
    this.appointments[index].isEditing = false;
  }

  onItemMoved(event: CdkDragDrop<any[]>, index: number) {
    if (event.previousContainer === event.container) {
      
      const movedAppointment = this.appointments[index];
      this.appointments.splice(index, 1);
      this.appointments.splice(event.currentIndex, 0, movedAppointment);
    } else {
      
      const movedAppointment = event.previousContainer.data[index];
      event.previousContainer.data.splice(index, 1);
      event.container.data.splice(event.currentIndex, 0, movedAppointment);
    }
  }

  onDragStarted(event: CdkDragStart, index: number) {
  }

  onDragMove(event: CdkDragMove<any>) {
  }

  onDragEnded(event: CdkDragEnd, index: number) {
  }

  setStyle(event: MouseEvent) {
    const style = {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
    };

    this.style = style;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      const movedAppointment = this.appointments[event.previousIndex];
      this.appointments.splice(event.previousIndex, 1);
      this.appointments.splice(event.currentIndex, 0, movedAppointment);
    } else {
      const movedAppointment =
        event.previousContainer.data[event.previousIndex];
      event.previousContainer.data.splice(event.previousIndex, 1);
      event.container.data.splice(event.currentIndex, 0, movedAppointment);
    }
  }

  openUpdateDialog(appointment: any) {
    appointment.isEditing = true;
  }
}
