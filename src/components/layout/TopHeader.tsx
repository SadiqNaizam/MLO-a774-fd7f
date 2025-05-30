import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  UsersRound, // For 'Find Friends' or 'Groups' icon
  MessageCircle, // For Messenger-like icon
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  ShieldCheck,
  UserCircle2
} from 'lucide-react';

const TopHeader: React.FC = () => {
  const user = { name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/150?u=olennamason', email: 'olenna.mason@example.com' };
  const notificationsCount = 36;
  const messagesCount = 8;

  const iconButtonClass = "h-10 w-10 bg-muted/60 hover:bg-muted text-foreground";

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card text-card-foreground shadow-md z-20 flex items-center justify-between px-4 border-b border-border">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center gap-2">
        <a href="#" aria-label="Facebook home">
          <Facebook className="h-10 w-10 text-primary fill-primary" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-10 pr-3 py-2 h-10 w-60 rounded-full bg-muted border-transparent focus:bg-card focus:border-primary/50"
          />
        </div>
      </div>

      {/* Center Section: Navigation Icons (Mimicking tab-like navigation) */}
      <nav className="hidden md:flex items-center gap-2">
        <Button variant="ghost" className="h-12 px-8 hover:bg-muted group data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:text-primary data-[active=true]:rounded-none" data-active={true}>
          <Home className="h-6 w-6 text-primary group-hover:text-primary" />
        </Button>
        <Button variant="ghost" className="h-12 px-8 hover:bg-muted group text-muted-foreground data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:text-primary data-[active=true]:rounded-none">
          <UsersRound className="h-6 w-6 group-hover:text-primary" />
        </Button>
        {/* Could add more icons like PlaySquare for Watch, Store for Marketplace etc. */}
      </nav>

      {/* Right Section: User Actions and Profile */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className={cn(iconButtonClass, "relative")}>
          <MessageCircle className="h-5 w-5" />
          {messagesCount > 0 && <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">{messagesCount}</span>}
          <span className="sr-only">Messages</span>
        </Button>
        <Button variant="ghost" size="icon" className={cn(iconButtonClass, "relative")}>
          <Bell className="h-5 w-5" />
          {notificationsCount > 0 && <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">{notificationsCount}</span>}
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className={iconButtonClass}>
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1 p-2 border-b">
                <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">See your profile</p>
                    </div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem>
              <UserCircle2 className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings & Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShieldCheck className="mr-2 h-4 w-4" />
              <span>Privacy Checkup</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
