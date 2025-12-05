import React from "react";

function MapComponent() {
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 ipadProPadding to-gray-800 p-8 xl:min-h-screen">
        <div className="max-w-8xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="font-montserrat mb-2 text-2xl font-semibold text-white md:text-3xl">
              Find Us in the Highlands
            </h1>
            <p className="font-poppins text-[#D4AF37]">
              26 ACRES. ABOVE THE CLOUDS
            </p>
          </div>

          <div className="h-[400px] w-full overflow-hidden rounded-lg border border-gray-700 shadow-2xl md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.357570206037!2d80.3310226383134!3d7.1052682180792655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30efe5a2e1cab%3A0x66e4b8966396e2ea!2sBulathkohupitiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sin!4v1764817133800!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="font-poppins text-lg text-gray-300">
              📍 Ataira, Bulathkohupitiya, Srilanka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
