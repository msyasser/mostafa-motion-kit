import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Stage,Heading,Symbol,SoundTrack,SoundProps,glass,G,progress,linear,useSeconds,LightSweep} from './Shared';

const nodes=[{x:400,y:400,label:'أفكار',k:0},{x:1520,y:400,label:'مواعيد',k:1},{x:300,y:660,label:'ملفات',k:2},{x:1620,y:660,label:'مشاريع',k:3},{x:520,y:870,label:'ملاحظات',k:0},{x:1400,y:870,label:'مهام',k:4}];
export const ConnectedSystem:React.FC<SoundProps>=(sound)=>{
 const t=useSeconds(),merge=progress(t,5.15,6.3),enter=progress(t,.3,1.1);
 return <Stage index="01">
  <Heading text="أدوات كتير. نظام واحد." until={5.1}/>
  <Heading text="كل حاجة بتشتغل مع بعض" at={5.55}/>
  <AbsoluteFill style={{transform:`perspective(1500px) rotateX(${(1-enter)*12}deg) scale(${.88+enter*.12+merge*.04})`,transformOrigin:'50% 60%'}}>
   <svg width="1920" height="1080" style={{position:'absolute',opacity:1-merge}}>
    <defs><filter id="connectionGlow"><feGaussianBlur stdDeviation="7"/></filter></defs>
    {nodes.map((n,i)=>{
      const p=linear(t,1.2+i*.24,2.5+i*.24),pulse=linear(t,2.2+i*.24,3.2+i*.24);
      const d=`M ${n.x} ${n.y} C ${n.x} 585, ${n.x<960?720:1200} 585, 960 585`;
      return <g key={i}><path d={d} stroke={G} fill="none" strokeWidth="6" pathLength="1" strokeDasharray="1" strokeDashoffset={1-p} opacity=".24" filter="url(#connectionGlow)"/><path d={d} stroke={G} fill="none" strokeWidth="1.6" pathLength="1" strokeDasharray="1" strokeDashoffset={1-p} opacity=".5"/>
       <circle cx={n.x+(960-n.x)*pulse} cy={n.y+(585-n.y)*pulse} r={5} fill={G} opacity={pulse>0&&pulse<1?1:0}/>
      </g>;
    })}
   </svg>
   {nodes.map((n,i)=>{const p=progress(t,.5+i*.12,1.15+i*.12);return <div key={i} style={{position:'absolute',left:n.x-110+(960-n.x)*merge,top:n.y-80+(585-n.y)*merge,width:220,height:160,...glass,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12,opacity:p*(1-merge),transform:`perspective(900px) rotateY(${(n.x<960?1:-1)*(1-merge)*14}deg) translateY(${(1-p)*40}px) scale(${1-merge*.7})`}}><Symbol kind={n.k} size={45}/><span style={{fontSize:27}}>{n.label}</span></div>})}
   <div style={{position:'absolute',left:960-(220+merge*780)/2,top:475-merge*115,width:220+merge*780,height:220+merge*270,...glass,boxShadow:'0 0 95px #d7b18020,inset 0 1px 0 #f4d9b660,0 32px 90px #0009',opacity:enter,overflow:'hidden'}}>
    <div style={{position:'absolute',left:0,top:0,right:0,height:3,background:'linear-gradient(90deg,transparent,#D7B180,transparent)'}}/>
    <div style={{position:'absolute',left:0,right:0,top:44-merge*12,textAlign:'center',opacity:1-merge}}><Symbol kind={3} size={78}/><div style={{fontSize:27,marginTop:12}}>نظامك</div></div>
    <div dir="rtl" style={{padding:'30px 48px',opacity:progress(t,6.15,6.55)}}>
     <div style={{fontSize:31,fontWeight:700,borderBottom:'1px solid #d7b18022',paddingBottom:22,display:'flex',alignItems:'center',gap:15}}><Symbol kind={3} size={34}/> مساحة شغل متصلة</div>
     {['الفكرة اتسجلت','الخطوة الجاية واضحة','وقت التنفيذ اتحجز'].map((s,i)=>{const p=progress(t,6.5+i*.42,7+i*.42);return <div key={s} style={{display:'flex',alignItems:'center',gap:22,marginTop:24,opacity:p,transform:`translateX(${(1-p)*35}px)`}}><div style={{background:'#d7b18016',borderRadius:12,padding:9,display:'flex'}}><Symbol kind={4} size={32}/></div><span style={{fontSize:35}}>{s}</span><div style={{marginRight:'auto',fontSize:18,opacity:.4}}>0{i+1}</div></div>})}
    </div>
   </div>
  </AbsoluteFill>
  <LightSweep at={5.35}/>
  <SoundTrack {...sound} cues={[[.3,'reveal'],[1.2,'tap',.7],[1.7,'tap',.7],[2.2,'tap',.7],[3.4,'resolve',.7],[5.2,'sweep'],[6.55,'tap'],[6.97,'tap'],[7.4,'resolve']]}/>
 </Stage>;
};
