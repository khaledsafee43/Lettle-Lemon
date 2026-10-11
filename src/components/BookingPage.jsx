import { useState } from 'react';
import BookingForm from './BookingForm.jsx';

const allTimes = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

export function initializeTimes() {
  return allTimes;
}

export function updateTimes(date) {
  if (!date) return initializeTimes();

  const day = new Date(`${date}T12:00:00`).getDay();

  if (day === 0 || day === 6) {
    return ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
  }

  return ['11:00 AM', '12:00 PM', '1:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
}

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState(initializeTimes);
  const [confirmation, setConfirmation] = useState('');

  const handleDateChange = (date) => {
    setAvailableTimes(updateTimes(date));
  };

  const handleSubmit = (reservation) => {
    setConfirmation(
      `Table reserved for ${reservation.guests} guest${reservation.guests === '1' ? '' : 's'} on ${reservation.date} at ${reservation.time}.`
    );
  };

  return (
    <section className="booking-section section-pad" id="booking">
      <div className="container booking-layout">
        <div className="booking-intro">
          <p className="eyebrow"><span /> YOUR TABLE IS WAITING</p>
          <h2>Reserve your<br /><em>little lemon.</em></h2>
          <p className="section-description">
            Choose a date, time, and occasion. We will keep a table ready for you.
          </p>
          <div className="booking-note">
            <strong>11 AM – 10 PM</strong>
            <span>Monday – Sunday · Chicago</span>
          </div>
          {confirmation && (
            <p className="booking-confirmation" role="status">{confirmation}</p>
          )}
        </div>

        <BookingForm
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
