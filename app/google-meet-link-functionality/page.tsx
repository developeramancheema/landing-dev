import { APP_NAME } from "@/lib/config";
const EMBED_SRC = "https://scribehow.com/embed/How_To_Set_Up_And_Test_Appointment_Booking_On_GetSetTime_for_Google_Meet__82DSwj4gQ_Cm6jtjFqQU2g?as=video";

export default function HowToBookAppointmentAndEmailNotificationToJoinWithGoogleMeetPage() {
  return (
    <>
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="col-span-12">
                <div className="relative bg-white">
                  <iframe
                    src={EMBED_SRC}
                    title={`${APP_NAME} How to Set Up and Test Appointment Booking on GetSetTime for Google Meet`}
                    width="100%"
                    height={800}
                    allow="autoplay; fullscreen; encrypted-media"
                    className="w-full rounded-xl bg-white"
                    style={{
                      aspectRatio: "16 / 12",
                      border: 0,
                      minHeight: 480,
                    }}
                  />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
