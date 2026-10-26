import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Redirects for old URLs
  async redirects() {
    return [
      {
        source: "/solutions/doctor-appointment-scheduling-app",
        destination: "/solutions/doctor-appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/solutions/dentist-appointment-scheduling-app",
        destination: "/solutions/dentist-appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/solutions/physiotherapist-appointment-booking-app",
        destination: "/solutions/physiotherapist-appointment-booking-software",
        permanent: true,
      },
      {
        source: "/solutions/hair-salon-appointment-scheduling-app",
        destination: "/solutions/salon-appointment-scheduling-software",
        permanent: true,
      },

      {
        source: "/blog/appointment-scheduling-software-what-it-is-how-it-works-and-who-should-use-it",
        destination: "/blog/how-to-schedule-appointments-easily-with-clients",
        permanent: true,
      },
      {
        source: "/blog/concept-of-an-online-doctors-appointment-booking-system-for-beginners",
        destination: "/blog/much-needed-appointment-booking-system-for-doctors",
        permanent: true,
      },
      {
        source: "/blog/smart-way-to-schedule-appointments-with-clients",
        destination: "/blog/basics-of-Scheduling-Software",
        permanent: true,
      },
    ];
  }


};

export default nextConfig;
