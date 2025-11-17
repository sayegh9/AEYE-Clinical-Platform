import { Bell, User, Settings, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onSettingsClick?: () => void;
}

export function Header({ onSettingsClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-40">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#0A74B8] flex items-center justify-center">
          <span className="text-white text-sm font-bold">A</span>
        </div>
        <h1 className="text-lg font-semibold text-gray-900">AEYE Clinical Platform</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <User className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button
          onClick={onSettingsClick}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
