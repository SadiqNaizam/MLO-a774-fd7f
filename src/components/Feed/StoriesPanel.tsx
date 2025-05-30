import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Archive, Settings } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface StoryUser {
  name: string;
  avatarUrl: string;
}

interface Story {
  id: string;
  user: StoryUser;
  storyImageUrl: string; 
  timestamp?: string;
}

const currentUserData: StoryUser = {
  name: 'Olenna Mason',
  avatarUrl: 'https://i.pravatar.cc/150?u=olennamason',
};

const friendsStoriesData: Story[] = [
  { id: 'story1', user: { name: 'David Lee', avatarUrl: 'https://i.pravatar.cc/150?u=davidlee' }, storyImageUrl: 'https://via.placeholder.com/100x150/FF6B6B/FFFFFF?Text=Story+1', timestamp: '1h' },
  { id: 'story2', user: { name: 'Sophia Chen', avatarUrl: 'https://i.pravatar.cc/150?u=sophiachen' }, storyImageUrl: 'https://via.placeholder.com/100x150/4ECDC4/FFFFFF?Text=Story+2', timestamp: '3h' },
  { id: 'story3', user: { name: 'Michael B.', avatarUrl: 'https://i.pravatar.cc/150?u=michaelb' }, storyImageUrl: 'https://via.placeholder.com/100x150/45B7D1/FFFFFF?Text=Story+3', timestamp: '5h' },
  { id: 'story4', user: { name: 'Emily R.', avatarUrl: 'https://i.pravatar.cc/150?u=emilyr' }, storyImageUrl: 'https://via.placeholder.com/100x150/F7D952/000000?Text=Story+4', timestamp: '8h' },
];

interface StoriesPanelProps {
  className?: string;
}

const StoriesPanel: React.FC<StoriesPanelProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <h2 className="text-md font-semibold text-card-foreground">Stories</h2>
        <div className="flex gap-2">
          <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary hover:underline">
            <Archive className="h-3 w-3 mr-1" /> Archive
          </Button>
          <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary hover:underline">
            <Settings className="h-3 w-3 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex flex-col items-center text-center p-3 border rounded-lg bg-muted/20">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-secondary hover:bg-secondary/80 border-2 border-primary/50 mb-2">
            <Plus className="h-6 w-6 text-primary" />
          </Button>
          <p className="text-sm font-medium text-card-foreground">Add to Your Story</p>
          <p className="text-xs text-muted-foreground">Share a photo, video or write something</p>
        </div>

        {friendsStoriesData.length > 0 && (
          <ScrollArea className="w-full whitespace-nowrap mt-4">
            <div className="flex space-x-3 pb-3">
              {friendsStoriesData.map((story) => (
                <div key={story.id} className="flex-shrink-0 w-[70px] text-center group cursor-pointer">
                  <div className="relative w-[60px] h-[60px] mx-auto rounded-full p-0.5 ring-2 ring-primary group-hover:ring-offset-1 ring-offset-background transition-all">
                    <Avatar className="w-full h-full">
                      <AvatarImage src={story.user.avatarUrl} alt={story.user.name} className="rounded-full" />
                      <AvatarFallback>{story.user.name.substring(0,1)}</AvatarFallback>
                    </Avatar>
                    {/* Story image could be a background to the avatar or a more complex component */}
                  </div>
                  <p className="text-xs mt-1.5 truncate text-muted-foreground group-hover:text-foreground">
                    {story.user.name}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};

export default StoriesPanel;
