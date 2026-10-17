import React from 'react';
import {Img,staticFile} from 'remotion';
import {Stage,Heading,Symbol,SoundTrack,SoundProps,glass,G,progress,linear,useSeconds,LightSweep} from './Shared';

export const DhayyAssistant:React.FC<SoundProps>=(sound)=>{
 const t=useSeconds(),enter=progress(t,.25,1.2),answer=progress(t,3.8,4.5);
 return <Stage index="03">
  <Heading text="من فكرة… لخطة تشتغل"/>
  <div style={{position:'absolute',left:65-enter*15,top:225,width:700,height:1050,opacity:enter,transform:`scale(${.94+enter*.06+linear(t,1,9)*.025}) translateY(${(1-enter)*60}px)`,transformOrigin:'50% 80%',maskImage:'linear-gradient(0deg,transparent 0%,black 24%,black 91%,transparent 100%)'}}>
    <Img src={staticFile('characters/dhayy-presenter.png')} style={{width:'100%',height:'100%',objectFit:'contain',maskImage:'linear-gradient(90deg,transparent,black 14%,black 83%,transparent)'}}/>
  </div>
  <svg width="1920" height="1080" style={{position:'absolute',opacity:progress(t,1.2,2)}}>
    <path d="M 680 790 C 820 790, 780 490, 945 490" fill="none" stroke={G} strokeWidth="2" opacity=".5" pathLength="1" strokeDasharray="1" strokeDashoffset={1-linear(t,1.4,2.2)}/>
    <circle cx={680+linear(t,1.5,2.2)*265} cy={790-linear(t,1.5,2.2)*300} r="5" fill={G} opacity={t>1.5&&t<2.2?1:0}/>
  </svg>
  <div style={{...glass,position:'absolute',left:870,top:320,width:850,height:595,padding:38,boxSizing:'border-box',opacity:progress(t,.9,1.6),transform:`perspective(1800px) rotateY(${-10+progress(t,1,6)*8}deg) rotateX(${4-progress(t,1,6)*4}deg) translateY(${(1-progress(t,.9,1.6))*60}px)`,overflow:'hidden'}}>
   <div dir="rtl" style={{display:'flex',alignItems:'center',gap:16,fontSize:28,borderBottom:'1px solid #d7b18024',paddingBottom:24}}><Symbol kind={3} size={36}/><span>مساعدك الذكي</span><span style={{marginRight:'auto',fontSize:17,opacity:.45}}>واجهة توضيحية</span></div>
   <div dir="rtl" style={{...glass,marginTop:26,padding:'22px 26px',fontSize:32,opacity:progress(t,1.7,2.1),transform:`translateX(${(1-progress(t,1.7,2.1))*40}px)`}}>رتّب أفكاري لخطة محتوى</div>
   <div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:28,opacity:(1-answer)*progress(t,2.2,2.5)}}>{[0,1,2].map(i=><div key={i} style={{width:9,height:9,borderRadius:9,background:G,opacity:.4+Math.sin(t*7-i)*.3}}/>)}</div>
   <div dir="rtl" style={{position:'absolute',top:225,left:38,right:38,opacity:answer}}>
    <div style={{fontSize:24,opacity:.65,marginBottom:20}}>نبدأ بثلاث خطوات واضحة</div>
    {['اختار الفكرة الأساسية','قسّمها لمشاهد قصيرة','جهّز اللقطة المناسبة'].map((s,i)=>{const p=progress(t,4.1+i*.65,4.65+i*.65);return <div key={s} style={{display:'flex',gap:20,alignItems:'center',padding:'18px 22px',marginTop:14,background:'#d7b18008',borderRadius:16,fontSize:32,opacity:p,transform:`translateY(${(1-p)*22}px)`}}><Symbol kind={i===2?4:i} size={34}/>{s}</div>})}
   </div>
   <div style={{position:'absolute',bottom:0,left:0,height:3,width:`${linear(t,2.2,3.8)*100}%`,background:`linear-gradient(90deg,transparent,${G})`,opacity:1-progress(t,4,4.4)}}/>
  </div>
  <div dir="rtl" style={{position:'absolute',left:850,top:940,width:900,textAlign:'center',fontSize:30,opacity:progress(t,6.5,7.1)}}>أنت تختار الفكرة. والنظام يساعدك تنفّذ.</div>
  <LightSweep at={3.8}/>
  <SoundTrack {...sound} cues={[[.3,'reveal'],[1,'sweep',.6],[1.75,'tap'],[2.3,'scan',.35],[3.85,'resolve'],[4.2,'tap',.55],[4.85,'tap',.55],[5.5,'tap',.55],[6.55,'resolve',.6]]}/>
 </Stage>;
};
