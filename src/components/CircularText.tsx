import React, { useEffect, useState } from 'react';

const CircularText = () => {
  const [rotation, setRotation] = useState(0);
  const [isInitialPause, setIsInitialPause] = useState(true);
  
  const textLines = [
    {
      text: "HORIZONS COLLIDE WHEN THE SUN KISSES OUR CHEEKS ONE MORE TIME",
      specialIndex: 26 // S in SUN
    },
    {
      text: "A TOAST TO MEMORIES TIME-BOUND YET ETERNAL",
      specialIndex: 40 // A in ETERNAL
    },
    {
      text: "IN THE WARM EMBRACE OF THE CARNAVAL GODS",
      specialIndex: 32 // V in CARNAVAL
    },
    {
      text: "A PROMISE FOR A SHARED LIFE",
      specialIndex: 8 // E in PROMISE
    },
    {
      text: "EACH STEP AND BREATH IN A PATH OF ENDLESS GROWTH",
      specialIndex: 18 // T in BREATH
    },
    {
      text: "QUANTUM WHISPERS AS WE GATHER BENEATH THE ALENTEJO SKIES",
      specialIndex: 26 // H in GATHER
    },
    {
      text: "DANCING LIGHT AND SHADOW DEFINE NEW DEPTHS FOR OUR SOULS",
      specialIndex: 37 // E in DEPTHS
    },
    {
      text: "LIKE GLISTENING RAYS ON OUR ISLAND'S SANDS THEY WEAVE US INTO THEIR RHYTHM",
      specialIndex: 40 // D in SANDS
    },
    {
      text: "IN A CONTINUOUS BREATH A TRADITION OLDER THAN LANGUAGE",
      specialIndex: 19 // A in BREATH
    },
    {
      text: "LOVE IS THE MYTH THAT HAS SHAPED OUR STORIES",
      specialIndex: 38 // T in STORIES
    },
    {
      text: "CELEBRATE WITH US FOREVER RETURNING TO THIS MOMENT",
      specialIndex: 8 // E in CELEBRATE
    },
    {
      text: "WHERE IT ALL TRULY BEGINS",
      specialIndex: 24 // S in BEGINS
    }
  ];

  useEffect(() => {
    if (isInitialPause) {
      const timer = setTimeout(() => {
        setIsInitialPause(false);
      }, 5000);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isInitialPause]);

  const isAligned = (rotation >= 175 && rotation <= 185);

  return (
    <div className="relative w-[800px] h-[800px] mx-auto">
      {textLines.map((line, lineIndex) => {
        const radius = 350 - (lineIndex * (25));
        const fontSize = 20 - (lineIndex * 0.8);
        const opacity = 1 - (lineIndex * 0.05);
        
        return (
          <div key={lineIndex} className="absolute w-full h-full">
            <div className="absolute w-full h-full">
              {line.text.split('').map((char, i) => {
                const anglePerChar = 360 / line.text.length;
                const startOffset = -anglePerChar * line.specialIndex;
                const charRotation = ((i * anglePerChar) + startOffset + rotation * (lineIndex % 2 === 0 ? 1 : -1));
                
                const isSpecialChar = i === line.specialIndex;
                
                return (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${charRotation}deg) translateY(-${radius}px)`,
                      fontSize: `${fontSize}px`,
                      transformOrigin: '0 0',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: isSpecialChar ? '700' : '500',
                      opacity,
                      color: isSpecialChar ? 'black' : 'inherit',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircularText; 