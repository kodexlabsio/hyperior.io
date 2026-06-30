<script lang="ts">
    import hyperiorLogo from './lib/assets/hyperior-logo-full.svg';
</script>

<main>
    <img src={hyperiorLogo} alt="Hyperior" class="logo" />
</main>

<style>
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
