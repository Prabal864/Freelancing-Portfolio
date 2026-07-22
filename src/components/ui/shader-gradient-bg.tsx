"use client";

import { useEffect, useRef } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

/**
 * Full-bleed animated gradient background, built on @shadergradient/react
 * (react-three-fiber + three under the hood). Rendered via
 * ShaderGradientCanvas so it fills its positioned parent instead of the
 * <ShaderGradient> plain-JSX form, which expects to own the whole viewport.
 *
 * A few props from the original snippet don't exist on the actual component
 * API — axesHelper, bgColor1/2, destination, embedMode, format, frameRate,
 * gizmoHelper are Framer-plugin-only metadata with no runtime effect here —
 * so they're dropped. fov and pixelDensity belong on ShaderGradientCanvas,
 * not ShaderGradient, so they've moved up.
 */
export function ShaderGradientBg() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // react-three-fiber's Canvas sizes its WebGL drawing buffer from a
    // ResizeObserver read at mount time. Inside this GSAP scroll-pinned
    // slide layout, that read can happen before the slide's real size has
    // settled, leaving the buffer stuck at the browser's 300x150 canvas
    // default (stretched to fill the CSS box, so it renders blurry/
    // distorted). Re-dispatching a resize once our own observer reports the
    // real size forces react-three-fiber to remeasure correctly.
    const observer = new ResizeObserver(() => {
      window.dispatchEvent(new Event("resize"));
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        pointerEvents="none"
        fov={45}
        pixelDensity={1.4}
      >
        <ShaderGradient
          animate="on"
          brightness={1}
          cAzimuthAngle={180}
          cDistance={2.81}
          cPolarAngle={80}
          cameraZoom={9.09}
          color1="#606080"
          color2="#8d7dca"
          color3="#212121"
          envPreset="city"
          grain="on"
          lightType="3d"
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
