import React from 'react';
import {Series,useVideoConfig} from 'remotion';
import {ConnectedSystem} from './ConnectedSystem';
import {FocusFilter} from './FocusFilter';
import {DhayyAssistant} from './DhayyAssistant';
import {SoundProps} from './Shared';
export const CinematicShowcase:React.FC<SoundProps>=(props)=>{
 const {fps}=useVideoConfig();
 return <Series>
  <Series.Sequence durationInFrames={10*fps} premountFor={fps} name="Connected system"><ConnectedSystem {...props}/></Series.Sequence>
  <Series.Sequence durationInFrames={10*fps} premountFor={fps} name="Focus filter"><FocusFilter {...props}/></Series.Sequence>
  <Series.Sequence durationInFrames={10*fps} premountFor={fps} name="Dhayy assistant"><DhayyAssistant {...props}/></Series.Sequence>
 </Series>;
};
