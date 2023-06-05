import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CalendarService } from './services/calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentFormComponent,
    AppointmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe,
    FormsModule,
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
