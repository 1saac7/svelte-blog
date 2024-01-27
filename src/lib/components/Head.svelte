<script>
    import { browser } from '$app/environment'
    import { siteConfig } from '$lib/js/config'

    let darkMode = siteConfig.defaultTheme === 'dark'

    let bgColor = darkMode ? '#232831' : '#ffffff'

    if (browser) {
        if ('theme' in localStorage) darkMode = localStorage.theme === 'dark'
        else {
            if (siteConfig.defaultTheme === 'system')
                window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? (darkMode = true)
                    : (darkMode = false)
        }
        bgColor = darkMode ? '#232831' : '#ffffff'
    }
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Accept-CH" content="Width,DPR" />
    <meta name="theme-color" content={bgColor} />
    <!-- <meta name="background-color" content={bgColor} /> -->
    <link rel="icon" href="/icons/favicon.ico" />
    <link rel="apple-touch-icon" href="/icons/favicon.png" />
    <link
        rel="preload"
        href="/fonts/Figtree.woff2"
        as="font"
        type="font/woff2"
        crossorigin
    />
    <link rel="manifest" href="/manifest.webmanifest" />
</svelte:head>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="home" viewBox="3 3 18 18">
        <path
            d="M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </symbol>

    <symbol id="themeToggle" viewBox="0 0 28 28">
        <path
            d="m 14,19.625 c 3.106545,0 5.625,-2.518462 5.625,-5.625 0,-3.106603 -2.518455,-5.625 -5.625,-5.625 z"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M 14.000001,0 C 6.26801,0 0,6.26801 0,13.999999 0,21.73192 6.26801,28 14.000001,28 21.73192,28 28,21.73192 28,13.999999 28,6.26801 21.73192,0 14.000001,0 Z m 0,2.8 V 8.4 C 10.907205,8.4 8.4,10.907204 8.4,13.999999 8.4,17.09274 10.907205,19.6 14.000001,19.6 v 5.6 C 20.18562,25.2 25.2,20.18562 25.2,13.999999 25.2,7.8144079 20.18562,2.8 14.000001,2.8 Z"
        />
    </symbol>

    <symbol id="github" viewBox="-1 0 100 98">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        />
    </symbol>

    <symbol id="unsplash" viewBox="-1 -1 26 26">
        <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
    </symbol>

    <symbol id="rss" viewBox="0 0 500 500">
        <path
            d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </symbol>

    <symbol id="email" viewBox="2 -2 30 30" fill="none">
        <style type="text/css">
            .st0 {
                stroke-width: 2.3;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
            }
        </style>
        <polyline class="st0" points="3,10 16,18 29,10 " />
        <path
            class="st0"
            d="M7,12.5V3c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v9.5"
            strok-width="2"
        />
        <path
            class="st0"
            d="M25,5c2.2,0,4,1.8,4,4v14c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4"
        />
        <line class="st0" x1="11" y1="5" x2="18" y2="5" />
        <line class="st0" x1="11" y1="9" x2="14" y2="9" />
    </symbol>
</svg>
