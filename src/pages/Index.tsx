import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PostsFeed from '@/components/Feed/PostsFeed';
import StoriesPanel from '@/components/Feed/StoriesPanel';
import SuggestedGroupsPanel from '@/components/Feed/SuggestedGroupsPanel';

/**
 * CoreFeedPage is the main page component for displaying the Facebook-like feed.
 * It utilizes the MainAppLayout to structure the page into header, sidebars, and main content area.
 * The main content consists of the PostsFeed, and the right sidebar contains StoriesPanel and SuggestedGroupsPanel.
 */
const CoreFeedPage: React.FC = () => {
  return (
    <MainAppLayout
      rightSidebarContent={
        // The right sidebar houses widgets like Stories and Suggested Groups.
        // MainAppLayout will apply spacing between these components.
        <React.Fragment>
          <StoriesPanel />
          <SuggestedGroupsPanel />
        </React.Fragment>
      }
    >
      {/* The main content area is dedicated to the PostsFeed */}
      <PostsFeed />
    </MainAppLayout>
  );
};

export default CoreFeedPage;
