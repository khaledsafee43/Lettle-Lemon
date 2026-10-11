import { useState } from 'react';

const initialForm = {
  date: '',
  time: '',
  guests: '2',
  occasion: 'Birthday',
};

function validateForm(form, availableTimes) {
  const errors = {};

  if (!form.date) errors.date = 'Please choose a date.';
  if (!form.time) errors.time = 'Please choose a time.';
  if (form.time && !availableTimes.includes(form.time)) {
    errors.time = 'Please choose an available time.';
  }

  const guests = Number(form.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
    errors.guests = 'Guests must be between 1 and 10.';
  }

  if (!form.occasion) errors.occasion = 'Please choose an occasion.';

  return errors;
}

export default function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (name === 'date') onDateChange(value);
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form, availableTimes);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSubmit(form);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-field">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? 'date-error' : undefined}
          required
        />
        {errors.date && <span id="date-error" className="field-error">{errors.date}</span>}
      </div>

      <div className="booking-field">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? 'time-error' : undefined}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
        </select>
        {errors.time && <span id="time-error" className="field-error">{errors.time}</span>}
      </div>

      <div className="booking-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={form.guests}
          onChange={handleChange}
          aria-invalid={Boolean(errors.guests)}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          required
        />
        {errors.guests && <span id="guests-error" className="field-error">{errors.guests}</span>}
      </div>

      <div className="booking-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
          aria-invalid={Boolean(errors.occasion)}
          aria-describedby={errors.occasion ? 'occasion-error' : undefined}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Dinner">Dinner</option>
        </select>
        {errors.occasion && <span id="occasion-error" className="field-error">{errors.occasion}</span>}
      </div>

      <button className="button button--yellow booking-submit" type="submit">
        Reserve a table <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}

export { initialForm, validateForm };
