<script>
    import { browser } from '$app/environment'
    import { siteConfig } from '$lib/js/config'

    let darkMode = siteConfig.defaultTheme === 'dark'

    function handleSwitchDarkMode() {
        darkMode = !darkMode
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')

        if (darkMode) {
            document.firstElementChild.setAttribute('data-theme', 'dark')
            document
                .querySelector('meta[name="theme-color"]')
                .setAttribute('content', '#232831')
        } else {
            document.firstElementChild.setAttribute('data-theme', 'light')
            document
                .querySelector('meta[name="theme-color"]')
                .setAttribute('content', '#feffff')
            // Jan 2024: Setting #ffffff will cause safari ignoring the change
        }
    }

    if (browser) {
        if (!('theme' in localStorage)) {
            if (siteConfig.defaultTheme === 'system')
                window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? (darkMode = true)
                    : (darkMode = false)
            localStorage.setItem('theme', darkMode ? 'dark' : 'light')
        } else
            localStorage.theme === 'dark'
                ? (darkMode = true)
                : (darkMode = false)
    }
</script>

<div class="theme-switch">
    <label>
        <input
            checked={darkMode}
            on:click={handleSwitchDarkMode}
            type="checkbox"
            id="theme-toggle"
        />
        <svg class="light"><use xlink:href="#themeToggle" /></svg>
        <svg class="dark"><use xlink:href="#themeToggle" /></svg>
    </label>
</div>

<style>
    .theme-switch {
        display: inline-block;
    }

    .theme-switch label {
        cursor: pointer;
    }

    .theme-switch svg {
        width: 28px;
        height: 28px;
        overflow: visible !important;
        fill: currentColor;
    }

    label [type='checkbox'] {
        display: none;
    }

    [type='checkbox']:not(:checked) ~ .dark,
    [type='checkbox']:checked ~ .light {
        display: none;
    }

    [type='checkbox']:not(:checked) ~ .light,
    [type='checkbox']:checked ~ .dark {
        display: block;
    }
</style>
