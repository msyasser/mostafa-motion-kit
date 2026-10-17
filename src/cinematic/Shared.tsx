import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, Easing, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/fonts';
import {z} from 'zod';

loadFont({family:'Tajawal',url:staticFile('fonts/Tajawal-Regular.ttf'),weight:'400'});
loadFont({family:'Tajawal',url:staticFile('fonts/Tajawal-Bold.ttf'),weight:'700'});
loadFont({family:'Tajawal',url:staticFile('fonts/Tajawal-ExtraBold.ttf'),weight:'800'});
export const G='#D7B180', B='#644334';
export const soundSchema=z.object({soundEffects:z.boolean(),soundVolume:z.number().min(0).max(1)});
export type SoundProps=z.infer<typeof soundSchema>;
export const curve=Easing.bezier(.19,1,.22,1);
export const progress=(t:number,start:number,end:number)=>interpolate(t,[start,end],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:curve});
export const linear=(t:number,start:number,end:number)=>interpolate(t,[start,end],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
export const useSeconds=()=>useCurrentFrame()/useVideoConfig().fps;
export const glass:React.CSSProperties={background:'linear-gradient(145deg,#d7b18016,#20150fe8 55%,#100d0be8)',border:'1px solid #d7b18050',boxShadow:'inset 0 1px 0 #f4d9b640, 0 24px 60px #0009',borderRadius:28};

export const Stage:React.FC<{children:React.ReactNode;index:string}>=({children,index})=>{
 const t=useSeconds();
 return <AbsoluteFill style={{background:'#080706',color:G,fontFamily:'Tajawal',overflow:'hidden'}}>
  <AbsoluteFill style={{background:`radial-gradient(ellipse at ${40+Math.sin(t*.28)*13}% 60%, #64433470, transparent 62%),radial-gradient(ellipse at 82% 5%, #d7b18012, transparent 45%)`}}/>
  <AbsoluteFill style={{backgroundImage:'linear-gradient(#d7b1800b 1px,transparent 1px),linear-gradient(90deg,#d7b1800b 1px,transparent 1px)',backgroundSize:'90px 90px',maskImage:'radial-gradient(ellipse at 50% 55%,black,transparent 67%)',transform:`perspective(1000px) rotateX(55deg) translateY(${120+t*5}px) scale(1.6)`}}/>
  {children}
  <div style={{position:'absolute',left:100,top:60,fontSize:18,letterSpacing:4,opacity:.45}}>MOSTAFA YASSER</div>
  <div style={{position:'absolute',right:100,top:60,fontSize:18,letterSpacing:3,opacity:.45}}>{index} / MOTION STUDY</div>
  <AbsoluteFill style={{background:'#080706',opacity:1-progress(t,0,.35)+linear(t,9.65,9.98)}}/>
 </AbsoluteFill>;
};

export const Heading:React.FC<{text:string;at?:number;until?:number;sub?:string}>=({text,at=.1,until=20,sub})=>{
 const t=useSeconds(),p=progress(t,at,at+.65),out=progress(t,until,until+.45);
 return <div dir="rtl" style={{position:'absolute',top:125,left:120,right:120,textAlign:'center',opacity:p*(1-out),transform:`translateY(${(1-p)*30-out*25}px)`}}>
  <div style={{fontWeight:800,fontSize:76,lineHeight:1.2}}>{text}</div>
  {sub&&<div style={{fontSize:29,opacity:.6,marginTop:20}}>{sub}</div>}
 </div>;
};

export const Symbol:React.FC<{kind?:number;size?:number}>=({kind=0,size=60})=><svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
 {kind%5===0?<><rect x="12" y="9" width="40" height="46" rx="8"/><path d="M22 24h20M22 33h20M22 42h12"/></>:
 kind%5===1?<><rect x="9" y="15" width="46" height="40" rx="8"/><path d="M9 28h46M22 9v12M42 9v12M22 37h7M36 37h7M22 45h7"/></>:
 kind%5===2?<><path d="m10 19 22-10 22 10v26L32 56 10 45zM10 19l22 12 22-12M32 31v25"/></>:
 kind%5===3?<><rect x="8" y="10" width="18" height="17" rx="5"/><rect x="39" y="10" width="18" height="17" rx="5"/><rect x="23" y="40" width="18" height="17" rx="5"/><path d="M17 28v5h31v-5M32 33v7"/></>:
 <><circle cx="32" cy="32" r="23"/><path d="m21 32 8 8 16-18"/></>}
</svg>;

export const SoundTrack:React.FC<SoundProps&{cues:Array<[number,string,number?]>}>=({soundEffects,soundVolume,cues})=>{
 const {fps}=useVideoConfig();
 if(!soundEffects)return null;
 return <>{cues.map(([at,file,gain=1],i)=><Sequence key={i} from={Math.round(at*fps)} premountFor={fps}><Audio src={staticFile(`sfx/${file}.wav`)} volume={soundVolume*gain}/></Sequence>)}</>;
};

export const LightSweep:React.FC<{at:number}>=({at})=>{
 const t=useSeconds(),p=linear(t,at,at+.8);
 return <AbsoluteFill style={{pointerEvents:'none',overflow:'hidden'}}><div style={{position:'absolute',left:-400+p*2700,top:-350,width:210,height:1700,transform:'rotate(28deg)',background:'linear-gradient(90deg,transparent,#d7b18022,transparent)',filter:'blur(28px)',opacity:Math.sin(p*Math.PI)}}/></AbsoluteFill>;
};
