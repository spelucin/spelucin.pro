import { useEffect } from "react";
import { X } from "lucide-react";
import { C } from "../constants";

interface BookingModalProps {
  showBooking: boolean;
  setShowBooking: (show: boolean) => void;
}

export function BookingModal({ showBooking, setShowBooking }: BookingModalProps) {
  useEffect(() => {
    if (!showBooking) {
      document.body.style.overflow = "auto";
      return;
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Initialize Cal.com if not already done
    const cal = (window as any).Cal;
    if (cal) {
      cal("init", "diagnostico", { origin: "https://app.cal.com" });
      cal.ns.diagnostico("inline", {
        elementOrSelector: "#my-cal-inline-diagnostico",
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
        calLink: "spelucin/diagnostico",
      });
      cal.ns.diagnostico("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": "dark"
      });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBooking]);

  if (!showBooking) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.3s ease-out"
      }}
    >
      <div
        onClick={() => setShowBooking(false)}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(6,20,15,0.92)",
          backdropFilter: "blur(16px)",
          cursor: "pointer"
        }}
      />

      <button
        onClick={() => setShowBooking(false)}
        style={{
          position: "absolute",
          top: 32,
          right: 32,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          border: `1px solid rgba(255,255,255,0.1)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: C.text,
          zIndex: 110,
          transition: "all 0.2s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <X size={24} />
      </button>
      
      <style>{`
        #my-cal-inline-diagnostico::-webkit-scrollbar {
          display: none;
        }
        #my-cal-inline-diagnostico {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div 
        id="my-cal-inline-diagnostico" 
        style={{ 
          width: "100%", 
          maxWidth: 1080, 
          height: "85vh", 
          maxHeight: 800,
          position: "relative",
          zIndex: 101,
          overflow: "hidden", 
          background: "transparent",
          animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        }} 
      />
    </div>
  );
}
