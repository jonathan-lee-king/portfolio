"use client";

import React from 'react';

interface FallbackResumeViewerProps {
  pdfPath?: string;
}

export default function FallbackResumeViewer({ pdfPath }: FallbackResumeViewerProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-8 text-center h-full flex-grow">
      <div className="text-yellow-400 text-2xl mb-4">⚠️</div>
      <h3 className="text-xl font-semibold text-white mb-2">PDF Viewer Unavailable</h3>
      <p className="text-gray-300 mb-4">
        The interactive PDF viewer couldn&apos;t be loaded in your browser.
      </p>
      {pdfPath && (
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Open PDF Directly
        </a>
      )}
    </div>
  );
}
