"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.getElementById("hero-title")?.classList.add("active");
    document
      .querySelector<HTMLElement>("#hero-section .draw-line")
      ?.classList.add("drawn");

    const cursorGlow = document.getElementById("cursor-glow");
    let glowFrameId = 0;
    const cursorCleanups: Array<() => void> = [];

    if (!prefersReducedMotion && window.innerWidth > 768 && cursorGlow) {
      let mouseX = 0;
      let mouseY = 0;
      let glowX = 0;
      let glowY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.style.opacity = "1";
      };

      const onMouseLeave = () => {
        cursorGlow.style.opacity = "0";
      };

      const animateCursor = () => {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;
        glowFrameId = requestAnimationFrame(animateCursor);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);
      glowFrameId = requestAnimationFrame(animateCursor);
      cursorCleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        cancelAnimationFrame(glowFrameId);
      });
    }

    const spotlightCards = document.querySelectorAll(".spotlight-card");
    const spotlightCleanups: Array<() => void> = [];

    spotlightCards.forEach((card) => {
      const onMove = (e: Event) => {
        const mouse = e as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouse.clientX - rect.left;
        const y = mouse.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      };
      card.addEventListener("mousemove", onMove);
      spotlightCleanups.push(() => card.removeEventListener("mousemove", onMove));
    });

    const magneticLinks = document.querySelectorAll(".magnetic-link");
    const magneticCleanups: Array<() => void> = [];

    magneticLinks.forEach((link) => {
      const el = link as HTMLElement;
      const onMove = (e: Event) => {
        const mouse = e as MouseEvent;
        const position = el.getBoundingClientRect();
        const x = mouse.pageX - position.left - position.width / 2;
        const y = mouse.pageY - position.top - position.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };
      const onOut = () => {
        el.style.transform = "translate(0px, 0px)";
      };
      link.addEventListener("mousemove", onMove);
      link.addEventListener("mouseout", onOut);
      magneticCleanups.push(() => {
        link.removeEventListener("mousemove", onMove);
        link.removeEventListener("mouseout", onOut);
      });
    });

    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll(".nav-link");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = el.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href?.substring(1) === current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    let observer: IntersectionObserver | undefined;

    if (!prefersReducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            if (target.classList.contains("scroll-reveal")) {
              target.classList.add("visible");
            }
            if (
              target.classList.contains("draw-line") &&
              !target.closest("#hero-title")
            ) {
              target.classList.add("drawn");
            }
            observer?.unobserve(target);
          });
        },
        { root: null, rootMargin: "0px", threshold: 0.15 },
      );

      document
        .querySelectorAll(".scroll-reveal, .draw-line")
        .forEach((el) => observer?.observe(el));
    } else {
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => el.classList.add("visible"));
      document
        .querySelectorAll(".draw-line")
        .forEach((el) => el.classList.add("drawn"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      spotlightCleanups.forEach((fn) => fn());
      magneticCleanups.forEach((fn) => fn());
      cursorCleanups.forEach((fn) => fn());
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const canvasEl = document.getElementById(
      "particle-canvas",
    ) as HTMLCanvasElement | null;
    if (!canvasEl) return;

    const context = canvasEl.getContext("2d");
    if (!context) return;

    const canvas = canvasEl;
    const ctx = context;
    let particles: Particle[] = [];
    let animationFrameId = 0;

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      size = 1;
      alpha = 0.3;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(173, 235, 179, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor(
        (canvas.width * canvas.height) / 20000,
      );
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const resizeCanvas = () => {
      const hero = document.getElementById("hero-section");
      canvas.width = window.innerWidth;
      canvas.height = hero?.offsetHeight ?? window.innerHeight;
      initParticles();
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(173, 235, 179, ${0.1 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="bg-noise" aria-hidden />
      <div id="cursor-glow" aria-hidden />
    </>
  );
}
