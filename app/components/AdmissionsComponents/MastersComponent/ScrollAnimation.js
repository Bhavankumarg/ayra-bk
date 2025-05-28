'use client';

import React, { useEffect, useRef, useState } from 'react';

const TextSection = () => {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const scrollProgressRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);
  const entryPointRef = useRef(null);

  const [active, setActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  
  const [canScroll, setCanScroll] = useState(true);

  const blocks = [
    {
      type: 'text',
      title: 'Future-Ready Curriculum',
      text: "With a strong foundation in liberal arts, technology, business, hospitality, and sports sciences, our academic offerings are designed to meet the demands of tomorrow's world - while fostering curiosity, creativity, and critical thought."
    },
    {
      type: 'image',
      src: '/admissions/masters_programs/what_set_us.png',
      alt: 'Future Ready'
    },
    {
      type: 'text',
      title: 'Designed Around You',
      text: 'From flexible academic structures to a diverse ecosystem of learning and mentorship, every aspect of Ayra has been built around the evolving needs of young people today.'
    },
    {
      type: 'image',
      src: '/admissions/masters_programs/what_set_us_1.png',
      alt: 'Designed Around You'
    }
  ];

  // Reset states when leaving section
  const resetStates = () => {
    setActive(false);
    setCanScroll(true);
    document.body.style.overflow = '';
    isAnimatingRef.current = false;
    scrollProgressRef.current = 0;
  };

  // Handle section visibility and initial direction
  useEffect(() => {
    const handleScroll = () => {
      if (!isFullyVisible) {
        const currentScrollY = window.scrollY;
        const isUp = currentScrollY < lastScrollY.current;
        setIsScrollingUp(isUp);

        if (entryPointRef.current === null) {
          entryPointRef.current = isUp;
        }

        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleVisibility = (entries) => {
      const [entry] = entries;

      if (entry.intersectionRatio >= 0.95) {
        setIsFullyVisible(true);
        setActive(true);
        setCanScroll(false);
        document.body.style.overflow = 'hidden';

        // Set initial slide based on entry direction
        const initialIndex = entryPointRef.current ? blocks.length - 1 : 0;
        setCurrentSlide(initialIndex);
        currentIndexRef.current = initialIndex;
      } else if (entry.intersectionRatio < 0.5) {
        setIsFullyVisible(false);
        resetStates();
        entryPointRef.current = null;
      }
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: [0, 0.5, 0.95, 1.0],
      rootMargin: "0px"
    });

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [blocks.length]);

  // Handle wheel events
  useEffect(() => {
    if (!active || !isFullyVisible) return;

    const handleWheel = (e) => {
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      const isScrollingDown = e.deltaY > 0;

      // Allow scrolling only when we've reached the end in the correct direction
      if (canScroll) {
        if ((entryPointRef.current && !isScrollingDown && currentIndexRef.current === 0) ||
          (!entryPointRef.current && isScrollingDown && currentIndexRef.current === blocks.length - 1)) {
          return;
        }
        e.preventDefault();
        setCanScroll(false);
        document.body.style.overflow = 'hidden';
      }

      e.preventDefault();
      scrollProgressRef.current += e.deltaY;
      const scrollThreshold = 500;

      if (Math.abs(scrollProgressRef.current) >= scrollThreshold) {
        isAnimatingRef.current = true;

        let nextIndex;
        if (entryPointRef.current) {
          // Entered from top (scrolling up)
          nextIndex = isScrollingDown ?
            currentIndexRef.current + 1 :
            currentIndexRef.current - 1;
        } else {
          // Entered from bottom (scrolling down)
          nextIndex = isScrollingDown ?
            currentIndexRef.current + 1 :
            currentIndexRef.current - 1;
        }

        // Ensure nextIndex is within bounds
        nextIndex = Math.max(0, Math.min(blocks.length - 1, nextIndex));

        if (nextIndex !== currentIndexRef.current) {
          setCurrentSlide(nextIndex);
          currentIndexRef.current = nextIndex;

          // Check if we should enable scrolling
          if (entryPointRef.current) {
            // When entered scrolling up
            if (nextIndex === 0 && !isScrollingDown) {
              setCanScroll(true);
              document.body.style.overflow = '';
            }
          } else {
            // When entered scrolling down
            if (nextIndex === blocks.length - 1 && isScrollingDown) {
              setCanScroll(true);
              document.body.style.overflow = '';
            }
          }
        }

        setTimeout(() => {
          isAnimatingRef.current = false;
          scrollProgressRef.current = 0;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [active, isFullyVisible, blocks.length, canScroll]);

  return (
    <div
      ref={sectionRef}
      className={`h-screen flex bg-white transition-opacity duration-500 ${isFullyVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Left Fixed Panel */}
      <div className="w-1/2 flex justify-center items-center px-6 h-screen sticky top-0 bg-white">
        <h2 className="text-4xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-start">
          What Sets Us<br />Apart
        </h2>
      </div>

      {/* Right Content Panel */}
      <div className="w-1/2 h-screen overflow-hidden relative">
        <div className="h-full w-full">
          {blocks.map((block, index) => (
            <div
              key={index}
              ref={(el) => (blocksRef.current[index] = el)}
              className={`absolute top-0 left-0 w-full h-full flex justify-center items-center px-12 transition-all duration-1000 ease-out
                ${index === currentSlide ? 'opacity-100 translate-x-0' :
                  entryPointRef.current ?
                    (index > currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full') :
                    (index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full')
                }`}
            >
              {block.type === 'text' ? (
                <div className="max-w-xl">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2050B1] mb-4 uppercase">
                    {block.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">{block.text}</p>
                </div>
              ) : (
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextSection;
