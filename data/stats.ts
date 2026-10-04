// The old site showed "256 satisfied clients" and "650 completed projects".
// Nobody has confirmed these. While CONFIRM_WITH_CLIENT is true they are NOT shown.
// Once the client confirms (or gives real numbers), update the values and set this to false.
export const CONFIRM_WITH_CLIENT = true;

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '256', label: 'Clients served' },
  { value: '650', label: 'Projects completed' },
  // TODO: add real "years in business" and "towns served" once the client provides them.
];

export const visibleStats: Stat[] = CONFIRM_WITH_CLIENT ? [] : stats;
