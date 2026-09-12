import { ShoppingBag } from "lucide-react";

interface MagicSackProps {
  onSackClick: () => void;
}

export function MagicSack({ onSackClick }: MagicSackProps) {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
      <button
        onClick={onSackClick}
        className="bg-amber-900 flex justify-between border-4 border-amber-600 text-4xl p-5 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-transform cursor-pointer group"
      >
        <ShoppingBag />
        <span className="text-lg block w-70 font-bold text-amber-200 mt-1 group-hover:text-white">
          CLICK A CART!
        </span>
      </button>
    </div>
  );
}