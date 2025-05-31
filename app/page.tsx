import Features from "./components/features";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Training Programs Section */}
      <Features />
    </div>
  );
}
