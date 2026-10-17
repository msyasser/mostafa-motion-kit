import React from 'react';
import {Stage,Heading,Symbol,SoundTrack,SoundProps,glass,G,progress,linear,useSeconds,LightSweep} from './Shared';

export const FocusFilter:React.FC<SoundProps>=(sound)=>{
 const t=useSeconds(),focus=progress(t,4.75,6),enter=progress(t,.4,1.2);
 return <Stage index="02">
  <Heading text="مش كل حاجة محتاجة انتباهك" until={4.6}/>
  <Heading text="اختار الخطوة اللي تفرق" at={5}/>
  <div style={{position:'absolute',inset:0,transform:`scale(${.94+enter*.06+focus*.04}) translateX(${-focus*160}px)`,transformOrigin:'60% 60%'}}>
   <svg width="1920" height="1080" style={{position:'absolute',opacity:enter*(1-focus*.88)}}>
    {Array.from({length:9},(_,i)=>{const y=360+i*65;return <g key={i}>
     <path d={`M 160 ${y} C 540 ${y}, 610 ${y}, 810 620`} fill="none" stroke={G} strokeWidth="1" opacity=".12"/>
     {Array.from({length:6},(_,j)=>{const p=((t*.23+j*.16+i*.027)%1);return <circle key={j} cx={160+p*650} cy={y+(620-y)*p*p} r={3+(i%3)} fill={G} opacity={.15+Math.sin(p*Math.PI)*.5}/>})}
    </g>})}
    {[0,1,2].map(i=><path key={i} d={`M 970 ${545+i*75} C 1100 ${545+i*75}, 1120 620, 1240 620`} fill="none" stroke={G} strokeWidth={i===1?3:1} opacity={i===1?.8:.3} pathLength="1" strokeDasharray="1" strokeDashoffset={1-linear(t,2,3.2)}/>)}
   </svg>
   {['إشعارات','أفكار مؤجلة','مهام متكررة'].map((s,i)=><div key={s} style={{...glass,position:'absolute',left:190+i*65,top:350+i*172,width:285,padding:'18px 20px',fontSize:28,direction:'rtl',opacity:enter*(1-focus),transform:`perspective(800px) rotateY(18deg) rotateZ(${[-7,4,-3][i]}deg) translateX(${-focus*200}px)`,filter:`blur(${focus*10}px)`}}>{s}</div>)}
   <div style={{...glass,position:'absolute',left:760,top:340,width:240,height:560,opacity:enter*(1-focus),transform:`perspective(900px) rotateY(-22deg)`,background:'linear-gradient(120deg,#d7b18012,#64433455,#080706aa)',overflow:'hidden'}}>
    <div style={{position:'absolute',top:40,left:20,right:20,textAlign:'center',fontSize:26}}>فلتر الأولويات</div>
    {Array.from({length:28},(_,i)=><div key={i} style={{position:'absolute',left:24+(i%4)*54,top:130+Math.floor(i/4)*52,width:7,height:7,borderRadius:10,background:G,opacity:.2}}/>)}
    <div style={{position:'absolute',left:0,right:0,top:100+linear(t,1,4.5)*400,height:3,background:G,boxShadow:'0 0 30px 8px #d7b18040',opacity:t<4.75?.65:0}}/>
   </div>
   <div style={{...glass,position:'absolute',left:1190-focus*270,top:440-focus*65,width:480+focus*320,height:350+focus*140,opacity:progress(t,2.6,3.25),transform:`perspective(1400px) rotateY(${-14*(1-focus)}deg)`,padding:45,boxSizing:'border-box'}}>
    <div dir="rtl" style={{display:'flex',gap:18,alignItems:'center',fontSize:24,opacity:.7}}><Symbol kind={4} size={35}/> الأولوية دلوقتي</div>
    <div dir="rtl" style={{fontSize:52+focus*12,fontWeight:800,marginTop:35,lineHeight:1.25}}>خطوة واحدة<br/>تستاهل تركيزك</div>
    <div style={{height:4,background:'#d7b18020',marginTop:35,borderRadius:4,overflow:'hidden'}}><div style={{height:'100%',width:`${linear(t,3.4,7.5)*100}%`,background:G,boxShadow:'0 0 16px #d7b18088'}}/></div>
    <div dir="rtl" style={{fontSize:27,marginTop:28,opacity:progress(t,6.2,6.8)}}>ابدأ بيها. والباقي له وقته.</div>
   </div>
  </div>
  <LightSweep at={4.8}/>
  <SoundTrack {...sound} cues={[[.4,'reveal'],[1.1,'scan',.5],[2.7,'tap'],[4.8,'sweep'],[6.2,'resolve']]}/>
 </Stage>;
};
