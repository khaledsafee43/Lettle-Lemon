import { describe, expect, test } from 'vitest';
import { initializeTimes, updateTimes } from './BookingPage.jsx';

describe('booking times', () => {
  test('initializeTimes returns available reservation times', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain('7:00 PM');
  });

  test('updateTimes returns valid times for a selected date', () => {
    const times = updateTimes('2026-10-12');
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain('6:00 PM');
  });
});
