"use client";

interface PDFZoomControlsProps {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
}

export default function PDFZoomControls({
  scale,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}: PDFZoomControlsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <button
        onClick={onZoomOut}
        className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300
          text-white w-9 sm:w-10 h-9 sm:h-10 rounded-xl shadow-lg transition-all duration-300
          disabled:opacity-50 text-lg font-medium flex items-center justify-center
          hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-none"
        disabled={scale <= 0.1}
      >
        −
      </button>

      <button
        onClick={onResetZoom}
        className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300
          text-white px-3 sm:px-4 h-9 sm:h-10 rounded-xl shadow-lg transition-all duration-300
          text-center text-sm font-medium min-w-[70px] sm:min-w-[80px] flex items-center justify-center
          hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:scale-105"
      >
        {Math.round(scale * 100)}%
      </button>

      <button
        onClick={onZoomIn}
        className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300
          text-white w-9 sm:w-10 h-9 sm:h-10 rounded-xl shadow-lg transition-all duration-300
          disabled:opacity-50 text-lg font-medium flex items-center justify-center
          hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-none"
        disabled={scale >= 100.0}
      >
        +
      </button>
    </div>
  );
}
