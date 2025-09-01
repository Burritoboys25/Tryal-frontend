import React from 'react'
import ExperiencePage from '@/modules/profile/components/experiences/ExperiencePage'

const Page = async () => {
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909';

  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  const bookingsRes = await fetch(`${baseUrl}/api/profile/${userId}/bookings`, {
    cache: 'no-store', // disables static caching
  });
  const bookings = await bookingsRes.json();

  const bookmarksRes = await fetch(`${baseUrl}/api/users/${userId}/bookmarks`, {
    cache: 'no-store',
  });
  const bookmarks = await bookmarksRes.json();

  return (
    <div className="">
      <h1 className="text-h3">Experiences</h1>
      <p className="text-body2 mt-1">View and/or manage your experiences.</p>

      <ExperiencePage bookings={bookings.data} bookmarks={bookmarks.data} />
    </div>
  );
};

export default Page;