import { FormationTree } from '../components/FormationTree';

export function FormationView() {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Organization Chart</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Current ministering assignments</p>
      </div>
      <div className="flex-1 w-full bg-[var(--color-bg-primary)]/50 rounded-2xl border border-[var(--color-border)] overflow-x-auto shadow-sm">
        <FormationTree />
      </div>
    </div>
  );
}
