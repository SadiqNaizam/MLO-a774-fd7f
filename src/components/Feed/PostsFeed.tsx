import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Users,
  Lock,
  MoreHorizontal,
  MapPin,
  ThumbsUp,
  MessageCircle,
  Share2,
  Image as ImageIcon // Renamed to avoid conflict with JSX Image
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

interface PostUser {
  name: string;
  avatarUrl: string;
  profileLink?: string;
}

interface Post {
  id: string;
  user: PostUser;
  timestamp: string;
  privacy: 'public' | 'friends' | 'only me';
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  location?: string;
  taggedFriends?: PostUser[];
  reactions: {
    count: number;
  };
  commentsCount: number;
  sharesCount: number;
}

const postsData: Post[] = [
  {
    id: 'post1',
    user: { name: 'Julia Fillory', avatarUrl: 'https://i.pravatar.cc/150?u=juliafillory', profileLink: '#' },
    timestamp: '2 hrs ago',
    privacy: 'friends' as const,
    content: 'Checking out some new stores downtown! The atmosphere is amazing and I found some great deals. Highly recommend a visit if you are in the area. #shopping #newstores #raleigh',
    imageUrl: 'https://via.placeholder.com/600x400/E0E0E0/B0B0B0?Text=Post+Image+1',
    location: 'Raleigh, North Carolina',
    reactions: { count: 156 },
    commentsCount: 32,
    sharesCount: 12,
    taggedFriends: [{ name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/150?u=olennamason', profileLink: '#'}]
  },
  {
    id: 'post2',
    user: { name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?u=johndoe', profileLink: '#' },
    timestamp: '5 hrs ago',
    privacy: 'public' as const,
    content: 'Just launched my new project! 🎉 So excited to share it with the world. Check it out and let me know your thoughts! Link in bio. #newproject #launch #innovation',
    reactions: { count: 289 },
    commentsCount: 78,
    sharesCount: 45,
  },
  {
    id: 'post3',
    user: { name: 'Alice Wonderland', avatarUrl: 'https://i.pravatar.cc/150?u=alicewonder', profileLink: '#' },
    timestamp: '1 day ago',
    privacy: 'public' as const,
    content: 'Beautiful sunset at the beach today. Feeling grateful for moments like these. 🌅 #sunset #beachlife #grateful',
    imageUrl: 'https://via.placeholder.com/600x400/A0D2DB/5E837D?Text=Beach+Sunset',
    reactions: { count: 520 },
    commentsCount: 112,
    sharesCount: 60,
  }
];

const PrivacyIcon: React.FC<{ privacy: Post['privacy'] }> = ({ privacy }) => {
  if (privacy === 'public') return <Globe className="h-3 w-3" />;
  if (privacy === 'friends') return <Users className="h-3 w-3" />;
  if (privacy === 'only me') return <Lock className="h-3 w-3" />;
  return null;
};

interface PostsFeedProps {
  className?: string;
}

const PostsFeed: React.FC<PostsFeedProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {postsData.map((post) => (
        <Card key={post.id} className="bg-card text-card-foreground rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
                  <AvatarFallback>{post.user.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <div>
                  <a href={post.user.profileLink || '#'} className="font-semibold text-sm hover:underline">
                    {post.user.name}
                  </a>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>{post.timestamp}</span>
                    <span className="mx-0.5">·</span>
                    <PrivacyIcon privacy={post.privacy} />
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Save Post</DropdownMenuItem>
                  <DropdownMenuItem>Edit Post</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Hide Post</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Report Post</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-2 pt-0">
            <p className="text-sm mb-3 whitespace-pre-wrap">
              {post.content}
            </p>
            {post.imageUrl && (
              <div className="my-3 -mx-4 sm:mx-0 aspect-video bg-muted flex items-center justify-center">
                <img src={post.imageUrl} alt={`Post by ${post.user.name}`} className="w-full h-full object-cover" />
              </div>
            )}
            {post.location && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                <MapPin className="h-3 w-3" />
                <span>{post.location}</span>
              </div>
            )}
            {post.taggedFriends && post.taggedFriends.length > 0 && (
                <div className="text-xs text-muted-foreground mt-1">
                    with {post.taggedFriends.map(friend => friend.name).join(', ')}
                </div>
            )}
          </CardContent>
          <CardFooter className="p-4 border-t flex flex-col items-start gap-2">
            <div className="flex justify-between w-full text-xs text-muted-foreground mb-2">
                <span>{post.reactions.count} Likes</span>
                <div className="flex gap-2">
                    <span>{post.commentsCount} Comments</span>
                    <span>{post.sharesCount} Shares</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 w-full">
              <Button variant="ghost" className="w-full text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <ThumbsUp className="h-5 w-5 mr-2" /> Like
              </Button>
              <Button variant="ghost" className="w-full text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <MessageCircle className="h-5 w-5 mr-2" /> Comment
              </Button>
              <Button variant="ghost" className="w-full text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <Share2 className="h-5 w-5 mr-2" /> Share
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PostsFeed;
