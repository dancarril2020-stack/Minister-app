export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
}

export interface Partnership {
  id: string;
  companions: string[];
  assignedFamilies: string[];
  zone: string;
  progress: number;
  notes: string;
  checklist: ChecklistItem[];
}

export const mockPartnerships: Partnership[] = [
  {
    id: 'p1',
    companions: ['John Doe', 'Peter Smith'],
    assignedFamilies: ['Gonzalez Family', 'Perez Family'],
    zone: 'North',
    progress: 50,
    notes: 'Need to focus on the Gonzalez family this month.',
    checklist: [
      { id: 'c1', task: 'First visit completed', completed: true },
      { id: 'c2', task: 'Follow-up call', completed: false }
    ]
  },
  {
    id: 'p2',
    companions: ['Alan Walker', 'Steve Brown'],
    assignedFamilies: ['Martinez Family'],
    zone: 'South',
    progress: 100,
    notes: 'All good.',
    checklist: [
      { id: 'c3', task: 'First visit completed', completed: true }
    ]
  },
  {
    id: 'p3',
    companions: ['David Lee', 'James Wilson'],
    assignedFamilies: ['Davis Family', 'Miller Family'],
    zone: 'North',
    progress: 0,
    notes: '',
    checklist: [
      { id: 'c4', task: 'Schedule visit', completed: false },
      { id: 'c5', task: 'First visit completed', completed: false }
    ]
  }
];
