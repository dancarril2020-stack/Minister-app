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
  avatarUrl?: string;
  reason: string;
  dateFlagged: string;
  severity: 'high' | 'medium' | 'pending';
}

export const mockMetrics: Metric[] = [
  { id: '1', title: 'Compañerismos Activos', value: 28, total: 30, trend: 'up', color: 'primary' },
  { id: '2', title: 'Familias Asignadas', value: 100, total: 120, trend: 'up', color: 'secondary' },
  { id: '3', title: 'Familias sin Visitar', value: 40, total: 100, trend: 'down', color: 'primary' },
  { id: '4', title: 'Zonas', value: 4, total: 4, trend: 'neutral', color: 'primary' }
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
  },
  {
    id: 'a3',
    familyId: 'f110',
    familyName: 'Martinez Family',
    reason: 'Pending: not visited yet',
    dateFlagged: '2026-07-23T08:00:00Z',
    severity: 'pending'
  }
];
