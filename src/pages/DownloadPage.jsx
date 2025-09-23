import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Apple,
  Smartphone,
  Download,
  Car,
  Users,
  UserCheck,
} from "lucide-react";

const DownloadPage = () => {
  const { t } = useLanguage();

  const apps = [
    {
      id: "marketplace",
      name: "Rentauras Marketplace",
      description:
        "Rent premium cars from trusted hosts. Perfect for travelers and car owners.",
      logo: "/src/assets/Rentaura-Logo.png",
      icon: Car,
      color: "from-[#0BB0CD] to-blue-500",
      features: [
        "Browse & rent cars",
        "Verified hosts",
        "Instant booking",
        "Full insurance",
      ],
    },
    {
      id: "driver",
      name: "RentaurasX Driver",
      description:
        "Drive with RentaurasX and earn with flexible hours. Eco-friendly rides for professional drivers.",
      logo: "/src/assets/RentauraX-Logo.png",
      icon: UserCheck,
      color: "from-green-500 to-emerald-600",
      features: [
        "Flexible earning",
        "Eco-friendly vehicles",
        "Professional support",
        "Fair compensation",
      ],
    },
    {
      id: "passenger",
      name: "RentaurasX Passenger",
      description:
        "Fast, safe rides with professional drivers. Women-to-women service available.",
      logo: "/src/assets/RentauraX-Logo.png",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: [
        "Safe rides",
        "Women-to-women option",
        "Real-time tracking",
        "Cashless payments",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#0BB0CD]/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            {t.downloadTheApp}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download the RENTAURAS apps and experience the future of
            transportation in Morocco
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {apps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div
                key={app.id}
                className={`rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
    ${app.id === "driver" ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {/* App Header */}
                <div className="text-center mb-8">
                  <img
                    src={
                      app.id === "marketplace"
                        ? "/src/assets/Rentaura-Logo.png" :
                        app.id === "driver"
                        ? "/src/assets/RentauraX-Logo-dark.png"
                        : "/src/assets/Rentaurax-Logo.png"
                    }
                    alt={app.name}
                    className="w-full h-24 object-contain mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-3">{app.name}</h2>
                  <p
                    className={`text-sm leading-relaxed ${
                      app.id === "driver" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {app.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4
                    className={`text-sm font-semibold mb-4 uppercase tracking-wide ${
                      app.id === "driver" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center text-sm ${
                          app.id === "driver"
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                            app.id === "driver" ? "bg-white" : "bg-[#0BB0CD]"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Buttons */}
                <div className="space-y-3">
                  <button
                    className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 group 
      ${
        app.id === "driver"
          ? "bg-white text-black hover:bg-gray-100"
          : "bg-black text-white hover:bg-gray-800"
      }`}
                  >
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs opacity-90">Download on</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>

                  <button
                    className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 group 
      ${
        app.id === "driver"
          ? "bg-white text-black hover:bg-gray-100"
          : "bg-black text-white hover:bg-gray-800"
      }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center 
        ${app.id === "driver" ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                      ▶
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-90">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marketplace Standalone Section */}
        <div className="bg-gradient-to-r from-[#0BB0CD] to-[#0fc2e1] rounded-3xl p-12 text-white mb-16 overflow-hidden relative">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">
                  Rentauras Marketplace
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  The complete car rental experience. Rent from trusted hosts or
                  list your car and start earning today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-[#0BB0CD] py-4 px-8 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Apple className="w-6 h-6" />
                    <span>Download for iOS</span>
                  </button>
                  <button className="bg-black/20 backdrop-blur-sm text-white py-4 px-8 rounded-2xl font-semibold hover:bg-black/30 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Smartphone className="w-6 h-6" />
                    <span>Download for Android</span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/src/assets/Rentaura-Logo.png"
                  alt="Rentauras Marketplace"
                  className="h-32 w-auto mx-auto filter brightness-0 invert opacity-80"
                />
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full" />
        </div>

        {/* RentaurasX Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Driver App */}
  <div className="bg-black rounded-3xl p-8 border border-gray-800">
    <div className="text-center mb-6">
    <img
        src="/src/assets/RentauraX-Logo-dark.png"
        className="w-full h-16 object-contain mx-auto mb-6"
      />
      <h3 className="text-2xl font-bold text-white mb-2">
        RentaurasX Driver
      </h3>
      <p className="text-gray-300">
        Start earning as a professional driver
      </p>
    </div>

    <div className="space-y-3">
      <button className="w-full bg-white text-black py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-300">
        <div className="flex items-center justify-center space-x-2">
          <Apple className="w-5 h-5 text-black" />
          <span>Download Driver App</span>
        </div>
      </button>
      <button className="w-full bg-white text-black py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-300">
        <div className="flex items-center justify-center space-x-2">
          <Smartphone className="w-5 h-5 text-black" />
          <span>Get it on Google Play</span>
        </div>
      </button>
    </div>
  </div>

  {/* Passenger App */}
  <div className="bg-white rounded-3xl p-8 border border-gray-200">
    <div className="text-center mb-6">
      <img
        src="/src/assets/Rentaurax-Logo.png"
        className="w-full h-16 object-contain mx-auto mb-6"
      />
      <h3 className="text-2xl font-bold text-black mb-2">
        RentaurasX Passenger
      </h3>
      <p className="text-gray-600">Book safe rides instantly</p>
    </div>

    <div className="space-y-3">
      <button className="w-full bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-900 transition-colors duration-300">
        <div className="flex items-center justify-center space-x-2">
          <Apple className="w-5 h-5 text-white" />
          <span>Download Passenger App</span>
        </div>
      </button>
      <button className="w-full bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-900 transition-colors duration-300">
        <div className="flex items-center justify-center space-x-2">
          <Smartphone className="w-5 h-5 text-white" />
          <span>Get it on Google Play</span>
        </div>
      </button>
    </div>
  </div>
</div>


        {/* QR Code Section */}
        <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-black mb-6">
            Scan to Download Any App
          </h3>
          <div className="w-48 h-48 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    Math.random() > 0.5 ? "bg-black" : "bg-white"
                  } rounded-sm`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            Point your camera at the QR code to download any RENTAURAS app
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
