import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X, User, Smartphone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BROCHURE_URL = "/PalmAltezze.pdf";

type TowerBrochureModalProps = {
  open: boolean;
  onClose: () => void;
};

const TowerBrochureModal = ({ open, onClose }: TowerBrochureModalProps) => {
  const [state, handleSubmit] = useForm("xbdrqepk");

  // Auto download after successful submit
  useEffect(() => {
    if (state.succeeded) {
      const link = document.createElement("a");
      link.href = BROCHURE_URL;
      link.download = "Palm Altezze Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close modal after short delay
      setTimeout(onClose, 1200);
    }
  }, [state.succeeded, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!open && state.succeeded) {
      window.location.hash = ""; // prevents re-open edge case
    }
  }, [open, state.succeeded]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <Card className="relative w-full max-w-md bg-[#0b0b0b] border border-white/10 p-6">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        {state.succeeded ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="w-14 h-14 text-[#d9a406] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Thank You!
            </h3>
            <p className="text-gray-400">
              Your brochure is downloading…
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-1">
              Download Brochure
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Enter your details to receive the brochure.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className="space-y-4"
            >
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white"
                />
              </div>

              <div className="relative">
                <Smartphone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#d9a406] hover:bg-[#b08505] text-black font-bold h-11"
              >
                {state.submitting ? "Submitting..." : "Download Now"}
              </Button>
            </form>
          </>
        )}
      </Card>
    </div>
  );
};

export default TowerBrochureModal;
