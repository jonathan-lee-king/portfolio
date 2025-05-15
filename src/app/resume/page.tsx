"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import FallbackPDFViewer from "@/components/pdf/FallbackPDFViewer";
import PDFZoomControls from "@/components/pdf/PDFZoomControls";
import type { PDFDocumentProxy } from 'pdfjs-dist';

// Dynamically import the PDF viewer component with SSR disabled
const PDFViewer = dynamic(
  () =>
    import("@/components/pdf/PDFViewer")
      .then(mod => mod)
      .catch(err => {
        console.error("Failed to load PDF viewer:", err);
        return { default: FallbackPDFViewer };
      }),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-[80vh] bg-gray-800 rounded-lg">
        <div className="animate-pulse text-gray-400">Loading PDF viewer...</div>
      </div>
    ),
  }
);

export default function ResumePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scale, setScale] = useState<number>(1.0);
  const [initialScale, setInitialScale] = useState<number | undefined>(undefined);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfInstance = useRef<PDFDocumentProxy | null>(null);
  const resumePath = "/docs/resumes/jonathan-king-senior-software-developer.pdf";

  // Function to handle document load success
  const handleDocumentLoad = useCallback((pdf: PDFDocumentProxy) => {
    pdfInstance.current = pdf; // Store PDF instance in ref

    // We need to wait a moment to ensure the container is fully rendered
    setTimeout(() => {
      if (containerRef.current) {
        pdf.getPage(1).then((page) => {
          const viewport = page.getViewport({ scale: 1 });
          // Get the available width (subtract a bit less to avoid overfitting)
          const containerWidth = containerRef.current!.clientWidth - 16;
          // Calculate scale to fit the page width, then reduce slightly to prevent tight fit
          const fitScale = (containerWidth / viewport.width) * 0.95;
          setInitialScale(fitScale);
          setScale(fitScale);
        });
      }
    }, 100);
  }, []);

  // Zoom control functions
  const zoomIn = useCallback(() => {
    setScale((prev: number) => Math.min(prev + 0.2, 100.0));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev: number) => Math.max(prev - 0.2, 0.1));
  }, []);

  const resetZoom = useCallback(() => {
    // Instead of using stored initialScale, recalculate based on current container dimensions
    if (containerRef.current && pdfInstance.current) {
      pdfInstance.current.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        const containerWidth = containerRef.current!.clientWidth - 16;
        const newScale = (containerWidth / viewport.width) * 0.95;
        setScale(newScale);
      });
    }
  }, []);

  // Add wheel event listener for zooming
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
          zoomIn();
        } else {
          zoomOut();
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [zoomIn, zoomOut]);

  // Add window resize event listener to adjust scale dynamically
  useEffect(() => {
    if (!initialScale || !containerRef.current) return;

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (containerRef.current && pdfInstance.current) {
          pdfInstance.current.getPage(1).then((page) => {
            const viewport = page.getViewport({ scale: 1 });
            // Get the available width (subtract a bit less to avoid overfitting)
            const containerWidth = containerRef.current!.clientWidth - 16;
            // Calculate scale to fit the page width, then reduce slightly to prevent tight fit
            const newScale = (containerWidth / viewport.width) * 0.95;
            setScale(newScale);
          });
        }
      }, 200); // Debounce resize events for better performance
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [initialScale]);

  // Only render the PDF viewer on the client side
  useEffect(() => {
    setIsMounted(true);

    // Function to handle user interaction
    const handleInteraction = () => {
      setIsNavVisible(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsNavVisible(false);
      }, 2000);
    };

    // Add event listeners for user interaction
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    // Initial timeout
    timeoutRef.current = setTimeout(() => {
      setIsNavVisible(false);
    }, 2000);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen h-screen bg-gray-950 text-white flex flex-col relative">
      {/* Fixed position header with controls */}
      <div
        className={`fixed top-0 left-0 right-0 bg-gray-950/40 backdrop-blur-xl px-6 py-5 z-50
          flex items-center justify-center gap-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10
          transition-all duration-500 ease-in-out ${!isNavVisible ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'}`}
      >
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300
            text-white px-6 py-2.5 rounded-xl shadow-lg transition-all duration-300
            flex items-center gap-2 font-medium absolute left-6
            hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105"
        >
          <span className="text-lg">←</span> Back to Home
        </Link>

        {isMounted && (
          <>
            <a
              href={resumePath}
              download
              className="bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300
                text-white px-8 py-2.5 rounded-xl shadow-lg transition-all duration-300
                text-sm font-medium mx-auto flex items-center gap-2
                hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            <div className="absolute right-6">
              <PDFZoomControls
                scale={scale}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                onResetZoom={resetZoom}
              />
            </div>
          </>
        )}
      </div>

      {/* Full screen PDF viewer with top margin to account for fixed header */}
      {isMounted ? (
        <div className="flex-grow w-full h-full">
          <PDFViewer
            pdfPath={resumePath}
            scale={scale}
            onDocumentLoad={handleDocumentLoad}
            containerRef={containerRef}
          />
        </div>
      ) : (
        <div className="flex-grow flex justify-center items-center">
          <div className="animate-pulse text-gray-400 flex items-center gap-3">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Initializing PDF viewer...
          </div>
        </div>
      )}
    </main>
  );
}
