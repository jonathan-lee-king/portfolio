"use client";

import { useState, type RefObject } from "react";
import { applyPolyfill } from "@/lib/promise-polyfill";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from 'pdfjs-dist';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "@/app/annotation-override.css"; // Custom CSS to fix large touchscreen hit areas

// Apply the Promise.withResolvers polyfill
applyPolyfill();

// Set the worker source - only on client-side
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
}

interface PDFViewerProps {
  pdfPath: string;
  scale: number;
  onDocumentLoad: (pdf: PDFDocumentProxy) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function PDFViewer({ pdfPath, scale, onDocumentLoad, containerRef }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  // Function to handle document load success
  async function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    setNumPages(pdf.numPages);
    onDocumentLoad(pdf);
  }
  return (    <div className="h-full flex flex-col relative">
      {/* Full height PDF container anchored to the top (y=0) */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 right-0 bottom-0 overflow-auto pdf-viewer-container px-2 touch-manipulation"
      >        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-full w-full">
              <div className="animate-pulse text-gray-400">Loading PDF...</div>
            </div>
          }
          error={
            <div className="flex justify-center items-center h-full w-full">
              <div className="text-red-500">
                Failed to load PDF. Please try again later.
              </div>
            </div>
          }
          className="py-0 min-h-full flex flex-col items-center w-full"
          externalLinkTarget="_blank"
        >
          {Array.from(new Array(numPages), (_, index) => (            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="mx-auto mb-4"
              // Ensure links work properly without oversized touch targets
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
