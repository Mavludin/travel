import React, { useRef } from 'react'
import { Booking } from '../../components/Booking/Booking';
import { CustomMap } from '../../components/CustomMap/CustomMap';
import { Destinations } from '../../components/Destinations/Destinations';
import { Testimonials } from '../../components/Testimonials/Testimonials';
import { TopCarousel } from '../../components/TopCarousel/TopCarousel'

export const Home = () => {
    const bookingRef = useRef<HTMLDivElement>(null);

    const scrollToBooking = () => {
        if (!bookingRef.current) return;
    
        bookingRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      };
  return (
    <>
    <TopCarousel scrollToBooking={scrollToBooking} />
    <Booking ref={bookingRef} />
    <CustomMap />
    <Destinations />
    <Testimonials />
    </>
  )
}
