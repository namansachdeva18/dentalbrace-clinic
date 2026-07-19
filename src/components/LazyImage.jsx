/**
 * LazyImage.jsx
 * Drop-in replacement for <img> that:
 *  1. Uses <picture> to serve WebP when available (browser picks best format)
 *  2. Shows a lightweight blur-up placeholder while loading
 *  3. Uses native lazy loading + IntersectionObserver for offscreen images
 *  4. Never shifts layout (width/height or aspect-ratio keeps space reserved)
 */

import { useState, useRef, useEffect } from 'react';

/**
 * Derive WebP src from a jpg/png path.
 * e.g. "/clinic-gallery/reception.jpg" → "/clinic-gallery/reception.webp"
 */
function toWebP(src) {
  if (!src) return null;
  return src.replace(/\.(jpg|jpeg|png)(\?.*)?$/i, '.webp$2');
}

/**
 * LazyImage — optimized image component
 * 
 * Props:
 *   src          - Original image path (jpg/png)
 *   alt          - Alt text (required for SEO + accessibility)
 *   className    - CSS class for the <img> element
 *   style        - Inline styles for the container div
 *   imgStyle     - Inline styles for the <img> itself
 *   priority     - If true, disables lazy loading (use for hero/LCP images)
 *   width        - Intrinsic width (helps browser reserve space)
 *   height       - Intrinsic height
 *   aspectRatio  - CSS aspect-ratio string e.g. "16/9" (alternative to w+h)
 *   onLoad       - Callback when image loads
 *   decoding     - 'async' (default) | 'sync' | 'auto'
 *   sizes        - srcset sizes attribute
 */
const LazyImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  imgStyle = {},
  priority = false,
  width,
  height,
  aspectRatio,
  onLoad,
  decoding = 'async',
  sizes,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority); // Priority images load immediately
  const containerRef = useRef(null);

  const webpSrc = toWebP(src);

  // IntersectionObserver for deferred loading
  useEffect(() => {
    if (priority || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = (e) => {
    setLoaded(true);
    onLoad?.(e);
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#1a2535', // placeholder bg color matching dark theme
    ...(aspectRatio && { aspectRatio }),
    ...style,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.4s ease',
    opacity: loaded ? 1 : 0,
    ...imgStyle,
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {/* Skeleton shimmer shown until image loads */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #1a2535 25%, #243040 50%, #1a2535 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}

      {inView && (
        <picture>
          {/* WebP source — served when browser supports it */}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
          
          {/* Fallback source (original jpg/png) */}
          <img
            src={src}
            alt={alt}
            className={className}
            style={imageStyle}
            loading={priority ? 'eager' : 'lazy'}
            decoding={decoding}
            fetchPriority={priority ? 'high' : 'auto'}
            width={width}
            height={height}
            sizes={sizes}
            onLoad={handleLoad}
            {...rest}
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;
