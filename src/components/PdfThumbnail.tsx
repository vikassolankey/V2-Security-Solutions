import React, { useEffect, useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure pdfjs worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface PdfThumbnailProps {
  url: string;
  className?: string;
}

export const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ url, className }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let isMounted = true;

    const generateThumbnail = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;

        if (isMounted) {
          setThumbnailUrl(canvas.toDataURL());
        }
      } catch (err) {
        console.error('Error generating PDF thumbnail:', err);
        if (isMounted) {
          setError(true);
        }
      }
    };

    generateThumbnail();

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-secondary/30 text-accent ${className}`}>
        <span className="text-sm font-medium text-white/60">Thumbnail Error</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt="PDF Thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-secondary/30">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
