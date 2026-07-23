export interface Metric {
  id: string;
  title: string;
  value: number;
  total: number;
  trend: 'up' | 'down' | 'neutral';
  color: string;
}

export interface UrgentAttention {
  id: string;
  familyId: string;
  familyName: string;
  reason: string;
  dateFlagged: string;
  severity: 'high' | 'medium';
}

export const mockMetrics: Metric[] = [
  { id: '1', title: 'Families Visited', value: 45, total: 120, trend: 'up', color: 'primary' },
  { id: '2', title: 'Pending Attentions', value: 12, total: 12, trend: 'neutral', color: 'secondary' },
  { id: '3', title: 'Active Partnerships', value: 28, total: 30, trend: 'down', color: 'primary' },
  { id: '4', title: 'Spiritual Check-ins', value: 88, total: 120, trend: 'up', color: 'primary' }
];

export const mockUrgentAttentions: UrgentAttention[] = [
  {
    id: 'a1',
    familyId: 'f101',
    familyName: 'Gonzalez Family',
    reason: 'Severe illness - requires medical visit',
    dateFlagged: '2026-07-06T10:00:00Z',
    severity: 'high'
  },
  {
    id: 'a2',
    familyId: 'f105',
    familyName: 'Sister Perez',
    reason: 'Food need',
    dateFlagged: '2026-07-07T08:30:00Z',
    severity: 'medium'
  }
];
