import { useRef, useState, useEffect } from 'react';

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  altBefore: string;
  altAfter: string;
  className?: string;
}

const BeforeAfter = ({ beforeSrc, afterSrc, altBefore, altAfter, className = '' }: BeforeAfterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl shadow-medium cursor-col-resize select-none ${className}`}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      role="img"
      aria-label="Before and after comparison"
    >
      {/* After image (background) */}
      <img
        src={afterSrc}
        alt={altAfter}
        className="block w-full h-auto"
        draggable={false}
      />
      
      {/* Before image (clipped overlay) */}
      <img
        src={beforeSrc}
        alt={altBefore}
        className="absolute inset-0 w-full h-auto pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`
        }}
        draggable={false}
      />
      
      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Drag handle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-1 h-4 bg-primary rounded-full mx-0.5" />
          <div className="w-1 h-4 bg-primary rounded-full mx-0.5" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
        {altBefore}
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
        {altAfter}
      </div>
    </div>
  );
};

export default BeforeAfter;