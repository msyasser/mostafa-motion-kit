import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/fonts';
import {brand} from './brand';
import {SceneProps, timing} from './config';

loadFont({family: 'Tajawal', url: staticFile('fonts/Tajawal-Regular.ttf'), weight: '400'});
loadFont({family: 'Tajawal', url: staticFile('fonts/Tajawal-Bold.ttf'), weight: '700'});
loadFont({family: 'Tajawal', url: staticFile('fonts/Tajawal-ExtraBold.ttf'), weight: '800'});
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const panel: React.CSSProperties = {background: brand.glass, boxShadow: brand.shadow, borderRadius: 30};

const Icon: React.FC<{kind: number; size?: number}> = ({kind, size = 50}) => <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
  {kind === 0 ? <><rect x="9" y="9" width="30" height="30" rx="8"/><path d="M17 18h14M17 25h14M17 32h8"/></>
    : kind === 1 ? <><rect x="7" y="8" width="13" height="13" rx="4"/><rect x="28" y="8" width="13" height="13" rx="4"/><rect x="18" y="29" width="13" height="13" rx="4"/><path d="M13 22v4h22v-4M24 26v3"/></>
    : <><circle cx="24" cy="24" r="17"/><path d="m16 24 6 6 11-13"/></>}
</svg>;

const Reveal: React.FC<{at: number; children: React.ReactNode; style?: React.CSSProperties}> = ({at, children, style}) => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const p = spring({frame: frame - at, fps, config: {damping: 24, stiffness: 110, mass: 0.9}});
  return <div style={{...style, opacity: interpolate(frame - at, [0, 12], [0, 1], clamp), transform: `translateY(${(1 - p) * 34}px) scale(${0.97 + p * 0.03})`}}>{children}</div>;
};

export const Broll: React.FC<SceneProps & {variant: 'HeroPanel' | 'SystemFlow' | 'FloatingCards'}> = (props) => {
  const frame = useCurrentFrame(); const {fps, durationInFrames} = useVideoConfig();
  const t = timing(fps, props.revealSeconds);
  const exit = interpolate(frame, [durationInFrames - 13, durationInFrames - 1], [1, 0], clamp);
  return <AbsoluteFill style={{background: brand.background, color: brand.gold, fontFamily: brand.font, overflow: 'hidden'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 30% 53%, #64433455 0%, #64433412 34%, transparent 65%)'}}/>
    <AbsoluteFill style={{opacity: exit}}>
      <div style={{position: 'absolute', left: 110, top: 85, fontSize: 19, letterSpacing: 5, opacity: 0.55}}>MOSTAFA YASSER / VISUAL NOTES</div>
      <Reveal at={t.intro} style={{position: 'absolute', right: 130, top: 350, width: 580, direction: 'rtl'}}>
        <div style={{height: 4, width: 64, background: brand.gold, marginBottom: 32, opacity: .75}}/>
        <div style={{fontSize: 76, lineHeight: 1.2, fontWeight: 800, textWrap: 'balance'}}>{props.title}</div>
        {props.subtitle && <div style={{fontSize: 30, lineHeight: 1.65, marginTop: 28, opacity: .67}}>{props.subtitle}</div>}
      </Reveal>
      <div style={{position: 'absolute', left: 150, top: 255, width: 900, height: 590}}>
        {props.variant === 'HeroPanel' && <Reveal at={t.intro + 6} style={{...panel, width: 810, height: 520, padding: 42, boxSizing: 'border-box', transformOrigin: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 28, borderBottom: '1px solid #d7b18022'}}>
            <div style={{display: 'flex', gap: 9}}>{[0, 1, 2].map(i => <div key={i} style={{width: 8, height: 8, background: brand.gold, borderRadius: '50%', opacity: .3}}/>)}</div>
            <div style={{fontSize: 25, direction: 'rtl'}}>مساحة العمل</div>
          </div>
          {props.labels.map((label, i) => <Reveal key={i} at={t.items[i]} style={{display: 'flex', direction: 'rtl', alignItems: 'center', gap: 23, marginTop: 23, padding: '16px 22px', borderRadius: 16, background: '#d7b18008'}}>
            <Icon kind={i} size={39}/><span style={{fontSize: 31, fontWeight: 700, flex: 1}}>{label}</span><span style={{fontSize: 18, opacity: .4}}>0{i + 1}</span>
          </Reveal>)}
        </Reveal>}
        {props.variant === 'SystemFlow' && <>
          <svg width="840" height="550" style={{position: 'absolute', top: 0, left: 0}}>
            {[0, 1].map(i => <path key={i} d={`M 690 ${145 + i * 155} L 690 ${185 + i * 155}`} fill="none" stroke={brand.gold} strokeWidth="2" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - interpolate(frame, [t.items[i + 1] - 14, t.items[i + 1]], [0, 1], clamp)} opacity=".5"/>)}
          </svg>
          {props.labels.map((label, i) => <Reveal key={i} at={t.items[i]} style={{...panel, position: 'absolute', top: i * 155 + 30, right: 80, width: 680, height: 115, display: 'flex', alignItems: 'center', direction: 'rtl', gap: 30, padding: '0 30px', boxSizing: 'border-box'}}>
            <Icon kind={i}/><span style={{fontSize: 35, fontWeight: 700, flex: 1}}>{label}</span><span style={{opacity: .35, fontSize: 24}}>0{i + 1}</span>
          </Reveal>)}
        </>}
        {props.variant === 'FloatingCards' && props.labels.map((label, i) => <Reveal key={i} at={t.items[i]} style={{...panel, position: 'absolute', left: [20, 330, 120][i], top: [15, 195, 370][i], width: 450, height: 150, padding: '0 30px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 25, direction: 'rtl'}}>
          <Icon kind={i} size={52}/><div style={{fontSize: 32, fontWeight: 700, lineHeight: 1.3}}>{label}</div>
        </Reveal>)}
      </div>
      <Reveal at={t.done} style={{position: 'absolute', bottom: 135, left: 160, display: 'flex', alignItems: 'center', gap: 15, fontSize: 18, opacity: .5}}>
        <div style={{width: 32, height: 1, background: brand.gold}}/> {props.variant === 'HeroPanel' ? 'WORKSPACE' : props.variant === 'SystemFlow' ? 'SYSTEM FLOW' : 'LESS, BUT BETTER'}
      </Reveal>
    </AbsoluteFill>
    {props.soundEffects && <>
      <Sequence from={t.intro} layout="none"><Audio src={staticFile('sfx/reveal.wav')} volume={props.soundVolume}/></Sequence>
      {t.items.map((at, i) => <Sequence key={i} from={at} layout="none"><Audio src={staticFile('sfx/tap.wav')} volume={props.soundVolume * .7}/></Sequence>)}
      <Sequence from={t.done} layout="none"><Audio src={staticFile('sfx/resolve.wav')} volume={props.soundVolume * .65}/></Sequence>
    </>}
  </AbsoluteFill>;
};
