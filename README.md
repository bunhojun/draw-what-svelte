# AI powered drawing game "Draw What?"

[Draw What?](https://draw-what-svelte.vercel.app/) is a drawing game powered by [ml5.js](https://ml5js.org/) and [The Quick, Draw! Dataset](https://github.com/googlecreativelab/quickdraw-dataset).

You draw some pictures on a canvas and AI judges your drawings.

## how to play

You have 5 drawing subjects to draw. For each subject, you have 20 seconds to finish drawing it.

At the end of each round, you get the confidence score for each drawing given by AI.

When you finish drawing all subjects, you will be given the final score, which is the avarage score of all drawings.

## for developers
run these lines of code in the root directory

1. ``yarn``
2. ``git config core.hooksPath .githooks``
3. ``yarn dev``

## test
This app uses [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/) and [Storybook Addon Interactions](https://storybook.js.org/docs/svelte/writing-tests/interaction-testing) for testing
