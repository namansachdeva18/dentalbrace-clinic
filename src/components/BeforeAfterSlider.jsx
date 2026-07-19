import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt = "Before", afterAlt = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none'
      }}
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After Image (Background) */}
      <picture>
        <source
          srcSet={afterImage.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
          type="image/webp"
        />
        <img 
          src={afterImage} 
          alt={afterAlt} 
          loading="lazy"
          decoding="async"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </picture>
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '0.25rem 1rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: 'var(--text-primary)',
        boxShadow: 'var(--shadow-sm)'
      }}>After</div>
      
      {/* Before Image (Foreground, clipped) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <picture>
          <source
            srcSet={beforeImage.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
            type="image/webp"
          />
          <img 
            src={beforeImage} 
            alt={beforeAlt} 
            loading="lazy"
            decoding="async"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none' }} 
          />
        </picture>
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '0.25rem 1rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          color: 'var(--text-primary)',
          boxShadow: 'var(--shadow-sm)'
        }}>Before</div>
      </div>

      {/* Slider Handle */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          backgroundColor: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(0,0,0,0.3)'
        }}>
          <ArrowLeftRight size={20} color="var(--accent-color)" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
