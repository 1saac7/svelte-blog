<script>
    import { siteConfig } from '$lib/js/config'
    var nameArray = siteConfig.siteName.split(/(\s+)/)
    var firstWord = ''
    var rest = ''
    if (nameArray.length < 2) {
        firstWord = nameArray[0]
    } else {
        firstWord = nameArray[0]
        for (let i = 2; i < nameArray.length; i++) {
            rest = rest.concat(' ', nameArray[i])
        }
    }
</script>

<div class="title">
    <span class="first-word">{firstWord}</span>
    <span>{rest}</span>
</div>

<p>I am Isaac Liang and this is my blog. Thanks for visiting.</p>

<style>
    .title {
        display: block;
        margin-top: 0.9em;
        margin-bottom: 28px;
        line-height: 1.25;
        font-weight: 700;
        font-size: 3em;
    }

    .first-word::before {
        position: absolute;
        top: 8px;
        content: '';
        background-image: url('/icons/whale.svg');
        background-repeat: no-repeat;
        background-position: 0 1.65em;
        width: 2em;
        height: 2em;
        pointer-events: none;
        opacity: 0.75;
        transition: 1s;
    }

    .first-word:hover::before {
        opacity: 1;
        background-position: 0 0;
    }

    .first-word {
        text-decoration: underline;
        text-decoration-color: var(--color-accent-subtle);
        text-decoration-thickness: 5px;
        text-underline-offset: 4.3px;
    }
</style>
