export interface Companion {
  name: string;
  avatarUrl?: string;
}

export interface Family {
  id: string;
  name: string;
  address: string;
  avatarUrl?: string;
  notes: string;
  visited: boolean;
  checklist: {
    scriptures: boolean;
    prayer: boolean;
    homeEvening: boolean;
    temple: boolean;
  };
}

export interface Partnership {
  id: string;
  companions: Companion[];
  assignedFamilies: Family[];
  zone: string;
  progress: number;
}

export const mockPartnerships: Partnership[] = [
  {
    id: 'p1',
    companions: [
      { name: 'John Doe' },
      { name: 'Peter Smith' }
    ],
    assignedFamilies: [
      {
        id: 'f1',
        name: 'Gonzalez Family',
        address: '123 Main St, Apt 4B',
        notes: 'Need to focus on the Gonzalez family this month.',
        visited: true,
        checklist: { scriptures: true, prayer: true, homeEvening: false, temple: false }
      },
      {
        id: 'f2',
        name: 'Perez Family',
        address: '456 Oak Avenue',
        notes: 'They asked for help with transportation next Sunday.',
        visited: false,
        checklist: { scriptures: false, prayer: false, homeEvening: false, temple: false }
      }
    ],
    zone: 'Zona Norte',
    progress: 50
  },
  {
    id: 'p2',
    companions: [
      { name: 'Alan Walker' },
      { name: 'Steve Brown' }
    ],
    assignedFamilies: [
      {
        id: 'f3',
        name: 'Martinez Family',
        address: '789 Pine Road',
        notes: 'All good. Very active in the ward.',
        visited: true,
        checklist: { scriptures: true, prayer: true, homeEvening: true, temple: true }
      }
    ],
    zone: 'Zona Sur',
    progress: 100
  },
  {
    id: 'p3',
    companions: [
      { name: 'David Lee' },
      { name: 'James Wilson' }
    ],
    assignedFamilies: [
      {
        id: 'f4',
        name: 'Davis Family',
        address: '321 Elm Street',
        notes: 'Just moved in.',
        visited: false,
        checklist: { scriptures: false, prayer: false, homeEvening: false, temple: false }
      },
      {
        id: 'f5',
        name: 'Miller Family',
        address: '654 Maple Drive',
        notes: '',
        visited: false,
        checklist: { scriptures: false, prayer: false, homeEvening: false, temple: false }
      }
    ],
    zone: 'Zona Este',
    progress: 0
  }
];
