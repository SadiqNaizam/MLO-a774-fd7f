import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  memberCount: number;
  coverImageUrl: string;
  tagline?: string;
}

const suggestedGroupsData: Group[] = [
  {
    id: 'group1',
    name: 'Mad Men (MADdicts)',
    memberCount: 6195,
    coverImageUrl: 'https://via.placeholder.com/300x80/8B4513/FFFFFF?Text=Mad+Men',
    tagline: 'TV Show Enthusiasts',
  },
  {
    id: 'group2',
    name: 'Dexter Morgan Fans', // Adjusted name to be shorter
    memberCount: 6984,
    coverImageUrl: 'https://via.placeholder.com/300x80/A52A2A/FFFFFF?Text=Dexter',
    tagline: 'Series Watch Club',
  },
  {
    id: 'group3',
    name: 'Tech Innovators NYC',
    memberCount: 2300,
    coverImageUrl: 'https://via.placeholder.com/300x80/1E90FF/FFFFFF?Text=Tech+NYC',
    tagline: 'Networking & Ideas',
  }
];

interface SuggestedGroupsPanelProps {
  className?: string;
}

const SuggestedGroupsPanel: React.FC<SuggestedGroupsPanelProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <h2 className="text-md font-semibold text-card-foreground">Suggested Groups</h2>
        <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary hover:underline">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="space-y-4">
          {suggestedGroupsData.map((group) => (
            <div key={group.id} className="flex flex-col border rounded-lg overflow-hidden bg-card shadow-sm">
              <div className="w-full h-20 bg-muted">
                 <img src={group.coverImageUrl} alt={`${group.name} cover`} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 flex flex-col items-start flex-grow">
                <h3 className="text-sm font-semibold text-card-foreground hover:underline cursor-pointer">{group.name}</h3>
                {group.tagline && <p className="text-xs text-muted-foreground mb-1">{group.tagline}</p>}
                <p className="text-xs text-muted-foreground mb-2 flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {group.memberCount.toLocaleString()} members
                </p>
                <Button variant="secondary" size="sm" className="w-full mt-auto">
                  <Plus className="h-4 w-4 mr-1 text-primary" /> Join Group
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestedGroupsPanel;
