import type { TargetAndTransition, Transition } from "framer-motion";

type HeroCardId = "code" | "pipeline" | "workflow";

type HeroCardMotion = {
  animate?: TargetAndTransition;
  transition?: Transition;
};

export function getHeroCardMotion(
  activeCard: string | null,
  reducedMotion: boolean,
): Record<HeroCardId, HeroCardMotion> {
  const spring: Transition = {
    type: "spring",
    stiffness: 170,
    damping: 22,
    mass: 0.9,
  };
  const floating = (duration: number): Transition => ({
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  });

  if (reducedMotion) {
    return {
      code: { animate: undefined, transition: undefined },
      pipeline: { animate: undefined, transition: undefined },
      workflow: { animate: undefined, transition: undefined },
    };
  }

  if (!activeCard) {
    return {
      code: {
        animate: { x: 0, y: [0, -8, 0], rotate: -2, scale: 1 },
        transition: floating(6),
      },
      pipeline: {
        animate: { x: 0, y: [0, 10, 0], rotate: 0, scale: 1 },
        transition: floating(6.5),
      },
      workflow: {
        animate: { x: 0, y: [0, -6, 0], rotate: [7, 6, 7], scale: 1 },
        transition: floating(7),
      },
    };
  }

  if (activeCard !== "code" && activeCard !== "pipeline" && activeCard !== "workflow") {
    return getHeroCardMotion(null, reducedMotion);
  }

  const selectedMotions: Record<HeroCardId, Record<HeroCardId, TargetAndTransition>> = {
    code: {
      code: { x: 12, y: -22, rotate: -2, scale: 1.035 },
      pipeline: { x: -78, y: 36, rotate: -1.5, scale: 0.97 },
      workflow: { x: 82, y: 32, rotate: 9, scale: 0.96 },
    },
    pipeline: {
      code: { x: -96, y: -22, rotate: -4, scale: 0.96 },
      pipeline: { x: 4, y: -8, rotate: 0, scale: 1.04 },
      workflow: { x: 86, y: 16, rotate: 10, scale: 0.96 },
    },
    workflow: {
      code: { x: -92, y: -18, rotate: -5, scale: 0.96 },
      pipeline: { x: -82, y: 30, rotate: -1, scale: 0.96 },
      workflow: { x: 14, y: -22, rotate: 5, scale: 1.04 },
    },
  };
  const selected = selectedMotions[activeCard];

  return {
    code: { animate: selected.code, transition: spring },
    pipeline: { animate: selected.pipeline, transition: spring },
    workflow: { animate: selected.workflow, transition: spring },
  };
}
