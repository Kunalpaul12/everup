# Overview

### This application is build on react native version 0.69.5 with node version 18.8.0 ⚛️

# Demo

Android

!["Android"](https://media.giphy.com/media/xp8XWEnrztqjqVImrr/giphy.gif)

IOS

!["IOS"](https://media.giphy.com/media/LSsD7XsOYjXL2OAgqg/giphy.gif)

# Surprise Feature

- You can search movies and filter according to its rating, length and recent release

Android

!["Android"](https://media.giphy.com/media/gEyjZKzLXmmpcXA6m2/giphy.gif)

IOS

!["IOS"](https://media.giphy.com/media/7rIN9sx4tOufnmzyoN/giphy.gif)

# Installation Requirements

### Android

- Android Studio
- Jdk

### Ios

- Xcode ( >= version 13 )

### Homebrew for mac

- Open the Terminal app.
- Type ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" You’ll see messages in the Terminal explaining what you need to do to complete the installation process. You can learn more about Homebrew at the Homebrew website.

### Npm

brew install node

### Yarn

To install it npm install --global yarn

# Run

- In the root of project type yarn (this will install all the dependency)

- To run on android (cd android && ./gradlew clean && cd .. && npx react-native run-android)

- To run on ios (cd ios && pod deintegrate && npx pod-install && xcodebuild clean && cd .. && npx react-native run-ios)
