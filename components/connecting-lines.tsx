"use client";

import { useEffect, useRef } from "react";

export default function ConnectingLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateLines = () => {
      if (!svgRef.current) return;

      const center = document.querySelector('[data-center="true"]');
      const planets = document.querySelectorAll('[data-planet="true"]');

      if (!center || planets.length === 0) return;

      const centerRect = center.getBoundingClientRect();
      const centerX = centerRect.left + centerRect.width / 2;
      const centerY = centerRect.top + centerRect.height / 2;

      // Clear existing lines
      const defs = svgRef.current.querySelector("defs");
      if (defs) defs.innerHTML = "";

      // Create gradient definitions for each planet
      planets.forEach((planet, index) => {
        const planetRect = planet.getBoundingClientRect();
        const planetX = planetRect.left + planetRect.width / 2;
        const planetY = planetRect.top + planetRect.height / 2;

        // Create gradient
        const gradientId = `gradient-${index}`;
        const gradient = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "linearGradient"
        );
        gradient.setAttribute("id", gradientId);
        gradient.setAttribute("gradientUnits", "userSpaceOnUse");
        gradient.setAttribute("x1", centerX.toString());
        gradient.setAttribute("y1", centerY.toString());
        gradient.setAttribute("x2", planetX.toString());
        gradient.setAttribute("y2", planetY.toString());

        const stop1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop"
        );
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", "rgba(130, 101, 167, 0.3)");

        const stop2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop"
        );
        stop2.setAttribute("offset", "100%");
        stop2.setAttribute("stop-color", "rgba(130, 101, 167, 0)");

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs?.appendChild(gradient);

        // Create line
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("x1", centerX.toString());
        line.setAttribute("y1", centerY.toString());
        line.setAttribute("x2", planetX.toString());
        line.setAttribute("y2", planetY.toString());
        line.setAttribute("stroke", `url(#${gradientId})`);
        line.setAttribute("stroke-width", "4");
        line.setAttribute("filter", "blur(4px)");

        if (svgRef.current) {
          svgRef.current.appendChild(line);
        }
      });
    };

    // Initial update
    updateLines();

    // Update on resize and scroll
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ filter: "blur(4px)" }}
    >
      <defs />
    </svg>
  );
}
