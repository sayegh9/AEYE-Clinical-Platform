import React, { ReactNode, useState, createContext, useContext } from 'react';

interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
}

interface TabsListProps {
  children: ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null>(null);

export function Tabs({ defaultValue, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: TabsListProps) {
  return (
    <div className="flex gap-2 border-b border-gray-200 mb-6">
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 -mb-px ${
        isActive
          ? 'text-[#0A74B8] border-b-[#0A74B8]'
          : 'text-gray-600 border-b-transparent hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: TabsContentProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }

  const { activeTab } = context;

  if (activeTab !== value) {
    return null;
  }

  return <div>{children}</div>;
}
