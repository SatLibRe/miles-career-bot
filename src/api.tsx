export const getApiUrl = () => {
  if (window.location.hostname === "localhost") {
    // Local emulator
    return "http://localhost:5001/milesbotcareerpage/us-central1/api";
  }
  // Production
  return "/api";
};
