import {z} from 'zod';
export const sceneSchema = z.object({
  title: z.string().min(1).max(36),
  subtitle: z.string().max(64),
  labels: z.array(z.string().min(1).max(24)).length(3),
  durationSeconds: z.number().min(6).max(20),
  revealSeconds: z.number().min(0.5).max(1.2),
  soundEffects: z.boolean(),
  soundVolume: z.number().min(0).max(1),
});
export type SceneProps = z.infer<typeof sceneSchema>;
export const defaults: SceneProps = {
  title: 'كل حاجة في مكانها', subtitle: 'مساحة واحدة تلمّ شغلك',
  labels: ['أفكار المحتوى', 'المهام اليومية', 'مشاريعك الحالية'],
  durationSeconds: 8, revealSeconds: 0.9, soundEffects: true, soundVolume: 0.22,
};
export const timing = (fps: number, gap: number) => ({
  intro: Math.round(fps * 0.3),
  items: [0, 1, 2].map(i => Math.round(fps * (1.35 + i * gap))),
  done: Math.round(fps * (1.35 + 2 * gap + 0.7)),
});
