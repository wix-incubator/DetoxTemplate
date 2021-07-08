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

1. Find which Android AVD you have installed (or [set one up](https://developer.android.com/studio/run/managing-avds))
2. Assuming you wish to run your tests on `Pixel_4_API_30` (detox is `Pixel_3A_API_29`), run:

```sh
npm run test:android-debug -- -n Pixel_4_API_30
```

### Android, in Release mode (preferred)

Building the project:

```sh
npm run build:android-release
```

Executing the tests (metro-budler not needed):

1. Find which Android AVD you have installed (or [set one up](https://developer.android.com/studio/run/managing-avds))
2. Assuming you wish to run your tests on `Pixel_4_API_30` (detox is `Pixel_3A_API_29`), run:

```sh
npm run test:android-release -- -n Pixel_4_API_30
```

### iOS, in Debug mode

Building the project:

```sh
cd ios
pod install
cd ..
npm run build:ios-debug
```

Launching the metro JS bundler (for auto app-reload):

```sh
npm start
```

Executing the tests (with the metro bundler server running in the background):

```sh
npm run test:ios-debug
```

### iOS, in Release mode

Building the project:

```sh
cd ios
pod install
cd ..
npm run build:ios-release
```

Executing the tests (metro-budler not needed):

```sh
npm run test:ios-release
```

## How to add your failing use case?

Unfortunately, there is no one-size-fits-all formula for that. However, once you're managed to properly build and run the preexisting dummy Detox test at least once on the associated platform (Android/iOS) - generally you'd have to:

1. Edit the build dependencies scripts (`build.gradle` and `app/build.gradle` on Android, or `Podfile` on iOS) in order to add specific dependencies you think might be related to your issue.
2. Either change the preexisting example screen, written in JSX - or add new ones (i.e. under `Screens/`). For the latter approach, be sure to also export your screens in `Screens/index.js`, and add a way to navigate to them in the main screen (e.g. a button in `App.js`).
3. Either edit the preexisting Detox test case (see `e2e/ExampleScreen.e2e.js`), or add your custom one (i.e. under `e2e/`) -- which runs a flow where your problem gets reproduced.

Should you manage to have your issue properly reproduced: `git commit` and `git push` your changes, and share a link to your repo as a comment in your Detox issue!
