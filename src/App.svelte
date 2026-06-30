<script lang="ts">
    import hyperiorLogo from './lib/assets/hyperior-logo-full.svg';

    let glowX = $state(50);
    let glowY = $state(45);

    const IDLE_DELAY = 2500;
    let lastPointerAt = 0;

    function handlePointer(event: PointerEvent) {
        lastPointerAt = performance.now();
        glowX = (event.clientX / window.innerWidth) * 100;
        glowY = (event.clientY / window.innerHeight) * 100;
    }

    $effect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame: number;

        function drift(now: number) {
            frame = requestAnimationFrame(drift);
            if (now - lastPointerAt < IDLE_DELAY) return;
            const t = now / 1000;
            const ease = Math.min((now - lastPointerAt - IDLE_DELAY) / 800, 1);
            const targetX = 50 + Math.sin(t * 0.55) * 38;
            const targetY = 45 + Math.sin(t * 0.72 + 1.3) * 30;
            glowX += (targetX - glowX) * 0.08 * ease;
            glowY += (targetY - glowY) * 0.08 * ease;
        }

        frame = requestAnimationFrame(drift);
        return () => cancelAnimationFrame(frame);
    });
</script>

<svelte:window onpointermove={handlePointer} />

<div class="glow" style="--mx:{glowX}%; --my:{glowY}%" aria-hidden="true"></div>

<main>
    <img src={hyperiorLogo} alt="Hyperior" class="logo" />
</main>

<style>
    .glow {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background: radial-gradient(
            600px circle at var(--mx, 50%) var(--my, 45%),
            rgba(2, 168, 240, 0.1),
            transparent 65%
        );
    }

    @media (prefers-reduced-motion: reduce) {
        .glow {
            display: none;
        }
    }

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .logo {
        width: min(420px, 80vw);
        animation: rise 0.9s var(--ease) both;
    }

    @media (prefers-reduced-motion: reduce) {
        .logo {
            animation: none;
        }
    }
</style>
