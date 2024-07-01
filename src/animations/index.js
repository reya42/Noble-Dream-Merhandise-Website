export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction,animDelay,midDelay,pos,firstDelay) => {
  if (!pos) {
    pos = 100;
  }
  if (!animDelay) {
    animDelay = 0.25
  }
  if (!midDelay) {
    midDelay=animDelay
  }
  if (!firstDelay) {
    firstDelay=animDelay
  }
  const lastDelay=animDelay

    return {
      initial: {
        x: direction === "left" ? -pos : direction === "right" ? pos : 0,
        y: direction === "up" ? pos : direction === "down" ? -pos : 0,
        opacity: 0,
        transition: { ...transition, delay: animDelay },
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: midDelay },
      },
      exit: {
        x: direction === "left" ? -pos : direction === "right" ? pos : 0,
        y: direction === "up" ? pos : direction === "down" ? -pos : 0,
        transition: { ...transition, delay: lastDelay },
      },
    };
};

export const onlySlide = (direction="right") => {
    return {
      initial: {
        x:0, y: 0, opacity: 1,
        transition: { ...transition, delay: 0.25 },
      },
      animate: {
        x: 0, y: 0,
        transition: { ...transition, delay: 0.25 },
      },
      exit: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        transition: { ...transition, delay: 0.25 },
      },
    };
}

export const fadeAnimation = {
    initial: {
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
};

export const fadeAnimationProps =(delayTime)=> {
  if (!delayTime) {
    delayTime=0.2
  }
  
  return {
    initial: {
      opacity: 0,
      transition: { ...transition, delay: delayTime },
    },
    animate: {
      opacity: 1,
      transition: { ...transition, delay: delayTime },
    },
    exit: {
      opacity: 0,
      transition: { ...transition, delay: delayTime },
    },
  }
};