import React from 'react';
import {Composition} from 'remotion';
import {Broll} from './Scene';
import {defaults, sceneSchema, SceneProps} from './config';
import {ConnectedSystem} from './cinematic/ConnectedSystem';
import {FocusFilter} from './cinematic/FocusFilter';
import {DhayyAssistant} from './cinematic/DhayyAssistant';
import {CinematicShowcase} from './cinematic/Showcase';
import {soundSchema} from './cinematic/Shared';

export const Root: React.FC = () => <>
  <Composition id="CinematicShowcase" component={CinematicShowcase} width={1920} height={1080} fps={30} durationInFrames={900} schema={soundSchema} defaultProps={{soundEffects:true,soundVolume:.32}}/>
  <Composition id="ConnectedSystem" component={ConnectedSystem} width={1920} height={1080} fps={30} durationInFrames={300} schema={soundSchema} defaultProps={{soundEffects:true,soundVolume:.32}}/>
  <Composition id="FocusFilter" component={FocusFilter} width={1920} height={1080} fps={30} durationInFrames={300} schema={soundSchema} defaultProps={{soundEffects:true,soundVolume:.32}}/>
  <Composition id="DhayyAssistant" component={DhayyAssistant} width={1920} height={1080} fps={30} durationInFrames={300} schema={soundSchema} defaultProps={{soundEffects:true,soundVolume:.32}}/>
  {(['HeroPanel', 'SystemFlow', 'FloatingCards'] as const).map((id) => {
    const component: React.FC<typeof defaults> = (props) => <Broll {...props} variant={id}/>;
    const preset = id === 'SystemFlow'
      ? {...defaults, title: 'خلّي النظام يشتغل', subtitle: 'من الفكرة للتنفيذ، خطوة بخطوة', labels: ['اجمع الأفكار', 'نظّم الخطوات', 'ابدأ التنفيذ']}
      : id === 'FloatingCards'
      ? {...defaults, title: 'وضوح أكتر. تشتت أقل.', subtitle: 'ثلاث ركائز ليوم أهدى', labels: ['هدف واضح', 'خطوة صغيرة', 'مراجعة مستمرة']}
      : defaults;
    return <Composition key={id} id={id} component={component}
      width={1920} height={1080} fps={30} durationInFrames={240}
      defaultProps={preset} schema={sceneSchema}
      calculateMetadata={({props}: {props: SceneProps}) => {
        const parsed = sceneSchema.parse(props);
        return {durationInFrames: Math.round(parsed.durationSeconds * 30), props: parsed};
      }}/>;
  })}
</>;
