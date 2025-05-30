import React from 'react';
import TopHeader from './TopHeader';
import NavSidebar from './NavSidebar';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode; // Main content (e.g., PostsFeed)
  rightSidebarContent?: React.ReactNode; // Widgets for the right (e.g., StoriesPanel, SuggestedGroupsPanel)
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, rightSidebarContent }) => {
  const leftSidebarWidthClass = "w-64"; // From layout.sidebarLeft.sizing (256px)
  const rightSidebarWidthClass = "w-64"; // From layout.sidebarRight.sizing (256px)
  // Header height is h-16 (64px), handled by pt-16 on content containers

  return (
    <div className="min-h-screen bg-background">
      <TopHeader /> {/* Fixed, z-20 */}
      <NavSidebar /> {/* Fixed, z-10, pt-16 (to clear TopHeader) */}
      
      {/* This container manages the layout of main content and right sidebar space */}
      {/* It is offset for the fixed header and left sidebar */}
      <div className={cn(
        "pt-16", // For TopHeader height
        "flex min-h-screen" // Ensure it takes full height and uses flex for columns
      )}>
        {/* Spacer div for the fixed NavSidebar */}
        <div className={cn("flex-shrink-0", leftSidebarWidthClass)} />

        {/* Main content area */}
        <main className={cn(
          "flex-1 min-w-0", // Takes available horizontal space, allows content to shrink
          "p-4", // General padding for main content (as per layout.mainContent.layout)
          // layout.mainContent.container="flex flex-col gap-6" to be applied by children like PostsFeed
        )}>
          {children}
        </main>

        {/* Spacer div for the fixed RightSidebar, only if rightSidebarContent is provided */}
        {/* This spacer ensures main content doesn't expand into the right sidebar's area */}
        {rightSidebarContent && (
          <div className={cn("flex-shrink-0", rightSidebarWidthClass)} />
        )}
      </div>

      {/* Fixed Right Sidebar, rendered if content is available */}
      {/* This sidebar will visually overlay the spacer div created above */}
      {rightSidebarContent && (
        <aside className={cn(
          "fixed top-0 right-0 h-screen bg-card border-l border-border overflow-y-auto z-10",
          rightSidebarWidthClass,
          "pt-16", // For TopHeader height
          "scrollbar-thin scrollbar-thumb-muted hover:scrollbar-thumb-muted-foreground" // Optional: custom scrollbar
        )}>
          {/* Content for the right sidebar is typically wrapped with padding and might have its own structure */}
          <div className="p-4 space-y-6 h-full"> {/* Using space-y-6 similar to layout.mainContent.container.gap */} 
            {rightSidebarContent}
          </div>
        </aside>
      )}
    </div>
  );
};

export default MainAppLayout;
