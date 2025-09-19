import BookingReview from '@/modules/booking-review/components/BookingReview';
import { getBusinessExperiences } from '@/modules/business/services/business';
import Container from '@/shared/components/layout/Container';
import ViewLayout from '@/shared/components/layout/ViewLayout';
import React from 'react';
import { Experience } from '@/shared/types/experienceTypes';
import { Timeslot } from '@/shared/types/timeslotTypes';

interface PageProps {
  searchParams: Promise<{ [key: string]: string }>;
}

interface BookingDetail {
  experience: Experience;
  timeslot: Timeslot;
}

const page = async ({ searchParams }: PageProps) => {
  const sp = await searchParams;
  const businessId = sp.businessId ?? '';
  const timeslotId = sp.timeslotId ?? '';

  const experiences = await getBusinessExperiences(businessId);

  // find matching experience & timeslot
  const bookingDetail: BookingDetail | null = (() => {
    for (const exp of experiences) {
      const slot = exp.timeslots?.find(t => t.timeslotId === timeslotId);
      if (slot) return { experience: exp, timeslot: slot };
    }
    return null;
  })();

  return (
    <ViewLayout type="default">
      <Container className="mt-12 space-y-8">
        <BookingReview bookingDetail={bookingDetail} />
      </Container>
    </ViewLayout>
  );
};

export default page;
