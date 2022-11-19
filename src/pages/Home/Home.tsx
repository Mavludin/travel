import React, { useRef, useState } from 'react';
import { Booking } from '../../components/Booking/Booking';
import { CustomMap } from '../../components/CustomMap/CustomMap';
import { Destinations } from '../../components/Destinations/Destinations';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Spinner } from '../../components/Spinner/Spinner';
import { Testimonials } from '../../components/Testimonials/Testimonials';
import { TopCarousel } from '../../components/TopCarousel/TopCarousel';

export type SelectedData = {
  destinations: string[];
  amount: number;
  date: string;
};

export type RouteData = {
  duration: string;
  distance: string;
};

export const Home = () => {
  const [selectedData, setSelectedData] = useState<SelectedData | null>(null);
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const [showMap, setShowMap] = useState(false);

  const [isMapLoading, setIsMapLoading] = useState(false);

  const bookingRef = useRef<HTMLDivElement>(null);

  console.log(routeData);

  const scrollToBooking = () => {
    if (!bookingRef.current) return;

    bookingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <>
      <TopCarousel scrollToBooking={scrollToBooking} />
      <Booking setSelectedData={setSelectedData} ref={bookingRef} />

      {isMapLoading && !routeData && <Spinner />}

      {selectedData && routeData && (
        <SearchResults
          isMapLoading={isMapLoading}
          routeData={routeData}
          selectedData={selectedData}
          setShowMap={setShowMap}
        />
      )}
      {selectedData && (
        <CustomMap
          showMap={showMap}
          setIsMapLoading={setIsMapLoading}
          setRouteData={setRouteData}
          selectedData={selectedData}
        />
      )}

      <Destinations />
      <Testimonials />
      <Destinations />
      <Testimonials />
    </>
  );
};
