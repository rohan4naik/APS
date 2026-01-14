import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917020999425?text=Hello,%20I%20would%20like%20to%20enquire%20about%20your%20work.%20Could%20you%20please%20guide%20me%20the%20available%20designs,%20customization%20options,%20and%20an%20approximate%20cost%20range?%20Thank%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
}
