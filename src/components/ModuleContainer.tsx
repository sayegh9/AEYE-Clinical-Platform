import { ReactNode } from 'react';

interface ModuleContainerProps {
  children: ReactNode;
}

export function ModuleContainer({ children }: ModuleContainerProps) {
  return (
    <main className="fixed left-64 top-16 right-0 bottom-0 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {children}
      </div>
    </main>
  );
}
