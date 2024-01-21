<script>
    import { browser } from '$app/environment'
    let darkMode = true

    function handleSwitchDarkMode() {
        darkMode = !darkMode

        localStorage.setItem('theme', darkMode ? 'dark' : 'light')

        if (darkMode) {
            document.firstElementChild.setAttribute('data-theme', 'dark')
            document
                .querySelector('meta[name="theme-color"]')
                .setAttribute('content', '#232831')
            document
                .querySelector('meta[name="background-color"]')
                .setAttribute('content', '#232831')
        } else {
            document.firstElementChild.setAttribute('data-theme', 'light')
            document
                .querySelector('meta[name="theme-color"]')
                .setAttribute('content', '#ffffff')
            document
                .querySelector('meta[name="background-color"]')
                .setAttribute('content', '#ffffff')
        }
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.firstElementChild.setAttribute('data-theme', 'dark')
            darkMode = true
        } else {
            document.firstElementChild.setAttribute('data-theme', 'light')
            darkMode = false
        }
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
        width: 32px;
        height: 32px;
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
