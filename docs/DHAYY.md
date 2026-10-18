# Dhayy / ضيّ — character guide

ضيّ مخصص فقط لمشاهد الـStorytelling: قصة أو موقف له بداية وفعل ونتيجة. لا تستخدمه في الشرح العام أو عرض الأدوات أو الواجهات أو لمجرد أن اللقطة قد تستفيد من شخص. داخل القصة، هو الشخصية الرئيسية وفق حاجة السرد.

## Storytelling and character motion

Plan a scene around what Dhayy wants, what happens, his action/reaction, and the outcome. Examples: he searches through scattered notes, notices a useful clue, then organizes a path forward. Use purposeful shots, environment and props rather than placing him beside every UI panel.

When tools permit, create actual character motion: head turns, gaze, gestures, body movement and interaction with objects. Use a suitable rig, authored character animation, or generated video assets with identity consistency, then compose and time the scene in Remotion. Camera pans, zooms and a moving still alone do not satisfy character acting.

Preserve hood, glasses, face and gold eyes across shots; check temporal consistency, hands, contact with objects, and continuity. Keep Mostafa's narration as the storytelling voice and synchronize meaningful actions and subtle sound effects to the supplied timing.

If character animation tools or assets are unavailable, explicitly report the limitation and provide a storyboard/animatic as a provisional deliverable. Do not silently substitute a moving still and call it a finished animated character scene.

## Identity lock

- وجه أسود مطفي بلا فم أو أنف أو بشرة ظاهرة.
- هودي أسود والكابيشو مرفوع، ملمس قماش واضح وإضاءة منخفضة.
- نظارة شفافة بنفس الشكل المرجعي، وعينان ذهبيتان دافئتان.
- الأسود والذهبي والبني؛ لا تغييرات عشوائية في الرأس أو الملابس.

## Included asset

`public/characters/dhayy-presenter.png` was generated from Mostafa's supplied character identity references. It includes a dark atmospheric background; it is not a rigged 3D model or a transparent cutout. The composition uses a soft edge mask to blend it into the dark stage.

Original master references are not redistributed here. Use the included asset for available identity reference, or obtain the master references from Mostafa for tighter matching. Inspect new poses before using them.

## Animation limits

The existing DhayyAssistant sample is a legacy 2.5D technical study: entrance/camera motion with independently animated UI and connectors. It does not animate speech, fingers, expressions or limbs, and is not the target for future storytelling scenes. Do not choose it for ordinary explanatory B-roll under the storytelling-only rule. Never describe it as a talking avatar.

For a talking scene, obtain Mostafa's voice clip and verify a compatible animation workflow. Do not add a mouth just to satisfy automatic lip-sync. HeyGen or another service is optional and must be checked for availability and character compatibility; no such integration is implemented here. Stronger acting requires a rig or a new animated asset.
