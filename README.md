<h1 align="center">
  DetoxTemplate
</h1>
<br/>
<p align="center">
  <img src="Assets/project-gif.gif" alt="animated" />
  <br/>
</p>

## Why this template exist?
This template was built in order to help you speed things up a little bit when opening an issue/bug.
It saves you the time of setting up a completely new project just for demostrating the problem you encountered. 

## How to use this template?
When opening an issue in [Detox](https://github.com/wix/Detox), use this template in order to create an example which reprduced your issue. These examples would help us speed up the process and solve the issue/bug you've submitted.
Just fork it and feel free to add/change things to this short project which will help to reprudce the issue you encounter with!

## How to run the project's Detox tests?

1. Fork the project
2. Clone it locally
3. Run `npm install`
4. Also run: `npm install -g detox-cli`

### Android, in Debug mode

Building the project:

```sh
npm run build:android-debug
```

Launching the metro JS bundler (for auto app-reload):

```sh
npm start
```

Executing the tests (with the metro bundler server running in the background):

```sh
npm run test:android-debug
```

### Android, in Release mode

Building the project:

```sh
npm run build:android-release
```

Executing the tests (no metro bundler needed):

```sh
npm run test:android-release
```

## iOS

TODO
