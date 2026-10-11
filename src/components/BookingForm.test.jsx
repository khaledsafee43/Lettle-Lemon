import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm.jsx';

const times = ['11:00 AM', '1:00 PM', '7:00 PM'];

function renderForm(onSubmit = () => {}, onDateChange = () => {}) {
  return render(
    <BookingForm
      availableTimes={times}
      onSubmit={onSubmit}
      onDateChange={onDateChange}
    />
  );
}

test('renders the booking form fields and available times', () => {
  renderForm();

  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('option', { name: '7:00 PM' })).toBeInTheDocument();
});

test('shows validation errors when required values are invalid', async () => {
  const user = userEvent.setup();
  renderForm();

  await user.clear(screen.getByLabelText(/number of guests/i));
  await user.type(screen.getByLabelText(/number of guests/i), '11');
  await user.click(screen.getByRole('button', { name: /reserve a table/i }));

  expect(screen.getByText(/please choose a date/i)).toBeInTheDocument();
  expect(screen.getByText(/please choose a time/i)).toBeInTheDocument();
  expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
});

test('submits valid reservation data', async () => {
  const user = userEvent.setup();
  const onSubmit = vi.fn();
  const onDateChange = vi.fn();
  renderForm(onSubmit, onDateChange);

  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2026-12-20' } });
  await user.selectOptions(screen.getByLabelText(/time/i), '7:00 PM');
  await user.clear(screen.getByLabelText(/number of guests/i));
  await user.type(screen.getByLabelText(/number of guests/i), '4');
  await user.selectOptions(screen.getByLabelText(/occasion/i), 'Anniversary');
  await user.click(screen.getByRole('button', { name: /reserve a table/i }));

  expect(onSubmit).toHaveBeenCalledWith({
    date: expect.any(String),
    time: '7:00 PM',
    guests: '4',
    occasion: 'Anniversary',
  });
  expect(onDateChange).toHaveBeenCalled();
});
