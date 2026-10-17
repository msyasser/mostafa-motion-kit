# Mostafa Motion Kit — working instructions

Build reusable B-rolls for Mostafa Yasser's own voiceover. Read README.md and STYLE.md before editing.

Start with START_HERE.md for the complete portable workflow. For editing requests also read docs/EDITING_WORKFLOW.md. The user's current instructions override defaults here.

- Default to Arabic Egyptian conversation and short, correctly joined RTL text.
- User provides the voiceover or adds it in editing. No generated narration, background music, or external voice service unless requested.
- Include subtle synchronized sound effects by default. Keep mute and volume controls.
- Use Remotion + React + TypeScript. Motion and audio cues must share the same frame timing. Never use CSS animations, Math.random(), wall clock, or asynchronous frame-dependent state.
- Preserve gold/brown/black identity, local Tajawal fonts and readable text. Follow docs/REFERENCE_STYLE.md for cinematic motion. When an idea needs a person, use Dhayy as the default lead and follow docs/DHAYY.md. Do not substitute generic people or mascots; do not add a character to scenes that do not need one.
- Use existing templates when they express the idea; otherwise build an original composition using the shared identity. Never force every idea into three labels or a UI panel. Clarify only essential missing facts that cannot reasonably be inferred; do not repeatedly ask for approvals already given.
- For a voiceover-specific scene, ask for the segment or timestamps if unavailable. Never claim automatic speech synchronization without implementing and verifying it.
- Keep source references untouched. Put user-provided reference assets in reference/; generated exports in out/.
- Run typecheck, inspect representative stills, and render/review a short sample with audio when authorized by the task. State any unverified playback or rendering limits.
- Do not publish to GitHub, choose a public license, or upload personal assets without the user's instruction.
- Be explicit about capability: the included code implements landscape B-rolls, not full video assembly or automatic transcription. For editing requests, follow the editing workflow, implement additional capability when authorized and feasible, and report what is actually executed versus proposed.
- For YouTube work, also read docs/YOUTUBE_PLAYBOOK.md. Deliver editable shot sources, numbered exports and placement notes. Do not claim a native editing project exists unless created and tested.
