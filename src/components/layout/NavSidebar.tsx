import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  PenSquare,
  FilePlus2,
  UsersPlus,
  CalendarPlus,
  Gift,
  MoreHorizontal
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isSubItem?: boolean;
  badgeCount?: number;
  actionIcon?: React.ElementType;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, isSubItem, badgeCount, actionIcon: ActionIcon }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center py-2 px-3 rounded-md text-sm font-medium',
        'hover:bg-muted',
        isActive ? 'bg-primary/10 text-primary border-l-4 border-primary font-semibold pl-[9px]' : 'text-foreground',
        isSubItem ? 'pl-10' : 'pl-3'
      )}
    >
      <Icon className={cn('h-5 w-5 mr-3', isActive ? 'text-primary' : 'text-primary/80')} />
      <span className="flex-grow truncate">{label}</span>
      {badgeCount && badgeCount > 0 && (
        <span className="ml-auto text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
          {badgeCount}
        </span>
      )}
      {ActionIcon && (
         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); alert(`Action for ${label}`); }} className="ml-2 p-1 rounded-full hover:bg-muted-foreground/20">
            <ActionIcon className="h-4 w-4 text-muted-foreground" />
         </button>
      )}
    </a>
  );
};

const NavSidebar: React.FC = () => {
  const user = { name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/150?u=olennamason' };

  const mainNavItems = [
    { href: '#', icon: Newspaper, label: 'News Feed', isActive: true, actionIcon: MoreHorizontal },
    { href: '#', icon: MessageSquare, label: 'Messenger', badgeCount: 5 },
    { href: '#', icon: PlaySquare, label: 'Watch', badgeCount: 99 },
    { href: '#', icon: Store, label: 'Marketplace' },
  ];

  const shortcuts = [
    { href: '#', icon: Gamepad2, label: 'FarmVille 2' },
    // Add more shortcuts here
  ];

  const exploreItems = [
    { href: '#', icon: CalendarDays, label: 'Events' },
    { href: '#', icon: Flag, label: 'Pages' },
    { href: '#', icon: Users, label: 'Groups' },
    { href: '#', icon: ListChecks, label: 'Friend Lists' },
    { href: '#', icon: HeartHandshake, label: 'Fundraisers' },
  ];

  const createItems = [
    { href: '#', label: 'Ad' },
    { href: '#', label: 'Page' },
    { href: '#', label: 'Group' },
    { href: '#', label: 'Event' },
    { href: '#', label: 'Fundraiser' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-card text-card-foreground shadow-lg z-10 pt-16 flex flex-col">
      <div className="overflow-y-auto flex-grow p-3 space-y-1.5 scrollbar-thin scrollbar-thumb-muted hover:scrollbar-thumb-muted-foreground">
        {/* User Profile Link */}
        <a href="#" className="flex items-center py-2 px-3 rounded-md hover:bg-muted mb-2">
          <Avatar className="h-7 w-7 mr-3">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold text-foreground truncate">{user.name}</span>
        </a>

        {mainNavItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}

        <Separator className="my-3" />

        <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shortcuts</h3>
        {shortcuts.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}

        <Separator className="my-3" />

        <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explore</h3>
        {exploreItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <a
          href="#"
          className={cn(
            'flex items-center py-2 px-3 rounded-md text-sm font-medium',
            'hover:bg-muted text-foreground'
          )}
        >
          <div className="h-5 w-5 mr-3 bg-muted rounded-full flex items-center justify-center">
            <ChevronDown className={cn('h-4 w-4 text-muted-foreground')} />
          </div>
          <span className="flex-grow">See More...</span>
        </a>

        <Separator className="my-3" />

        <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Create</h3>
        <div className="px-3 space-x-2">
          {createItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-primary hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="p-3 border-t border-border text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Facebook Clone</p>
      </div>
    </aside>
  );
};

export default NavSidebar;
