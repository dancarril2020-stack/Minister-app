export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
}

export interface Companion {
  name: string;
  avatarUrl?: string;
}

export interface Partnership {
  id: string;
  companions: Companion[];
  assignedFamilies: string[];
  zone: string;
  progress: number;
  notes: string;
  checklist: ChecklistItem[];
}

export const mockPartnerships: Partnership[] = [
  {
    id: 'p1',
    companions: [
      { name: 'John Doe' },
      { name: 'Peter Smith' }
    ],
    assignedFamilies: ['Gonzalez Family', 'Perez Family'],
    zone: 'Zona Norte',
    progress: 50,
    notes: 'Need to focus on the Gonzalez family this month.',
    checklist: [
      { id: 'c1', task: 'First visit completed', completed: true },
      { id: 'c2', task: 'Follow-up call', completed: false }
    ]
  },
  {
    id: 'p2',
    companions: [
      { name: 'Alan Walker' },
      { name: 'Steve Brown' }
    ],
    assignedFamilies: ['Martinez Family'],
    zone: 'Zona Sur',
    progress: 100,
    notes: 'All good.',
    checklist: [
      { id: 'c3', task: 'First visit completed', completed: true }
    ]
  },
  {
    id: 'p3',
    companions: [
      { name: 'David Lee' },
      { name: 'James Wilson' }
    ],
    assignedFamilies: ['Davis Family', 'Miller Family'],
    zone: 'Zona Este',
    progress: 0,
    notes: '',
    checklist: [
      { id: 'c4', task: 'Schedule visit', completed: false },
      { id: 'c5', task: 'First visit completed', completed: false }
    ]
  }
];
