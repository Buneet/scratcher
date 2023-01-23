import React, { useRef }  from 'react';
import ScratchCard from 'react-scratchcard-v2';
import { CUSTOM_BRUSH_PRESET } from 'react-scratchcard-v2';

import IMG from './eiran.jpg';

const App = () => {

  const ref = useRef<ScratchCard>(null);


  return (
    <div>
      
      <ScratchCard
        width={400}
        height={700}
        image={IMG}
        finishPercent={80}
        customBrush={CUSTOM_BRUSH_PRESET}
        onComplete={() => console.log('complete')}
      >
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <h1>Hello</h1>
        </div>
      </ScratchCard>
    </div>
  );
};

export default App;
