import SequenceScroll from "@/components/SequenceScroll";
import PreservationSection from "@/components/PreservationSection";
import ExplorePreviewSection from "@/components/ExplorePreviewSection";
import MapPreviewSection from "@/components/MapPreviewSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <SequenceScroll />
      
      <PreservationSection />
      <ExplorePreviewSection />
      <MapPreviewSection />
    </main>
  );
}
