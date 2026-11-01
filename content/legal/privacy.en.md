# Privacy Policy

_Last updated: 1 November 2026_

Prep Book asks for no name, account or contact detail, and collects none. There is no server of the developer's own, and the app makes no network request of its own. Within the app, data can leave the device in two cases only: when the app talks to the App Store or Google Play to buy or check the unlock, and when Google ML Kit, which reads text on Android, sends diagnostics. Each is described below, together with the device backup that the operating system handles.

## What is stored on your device

The app stores the following on the device and sends none of it to the developer:

- your recipes and their earlier versions;
- your ingredients and the purchase price you entered for each;
- the production runs you saved;
- whether the unlock has been confirmed on this device.

Removing the app removes them.

The app does not exclude this data from your device's own backup. If device backup is on, such as iCloud Backup on iPhone and iPad or backup to your Google Account on Android, it can include this data. The operating system handles that backup under your settings, and the developer has no access to it.

When you back up your recipe library, the app makes a file holding the recipes, ingredients, prices and production runs above and saves it where you choose. Where you keep that file and who you share it with is up to you. Restoring a backup replaces the recipe library on the device with the file's contents.

A production sheet PDF goes to your device's share or print screen, and only to the app or printer you pick there.

## Recipe import

You can import a recipe from pasted text, a screenshot, or a photo of a printed recipe. Text in an image is read on the device: by Apple's Vision framework on iPhone and iPad, and by the Google ML Kit Korean model bundled in the app on Android. The app makes a copy of the image you pick and shows it beside the imported lines while you review them, and deletes the copy when you finish or cancel the review. Recognized text and images are not sent off the device.

On an iPhone or iPad that supports Apple Intelligence, you can ask for suggested values for lines that are still open. The app uses only Apple's on-device language model, never Apple's Private Cloud Compute, and a suggestion is not part of the recipe until you confirm it.

## Unlock purchase

The free version holds one recipe, and a one-time in-app purchase lets you save as many as you need. The App Store or Google Play handles the purchase and the payment; the developer receives no payment method or payment details.

The app asks the store whether your account owns the unlock when the app starts, when you return to it, and when you tap Restore purchases. What passes between the app and the store is handled under Apple's and Google's privacy policies:

- [Apple Privacy Policy](https://www.apple.com/legal/privacy/)
- [Google Privacy Policy](https://policies.google.com/privacy)

## ML Kit diagnostics on Android

Google ML Kit, bundled in the Android app, reads text on the device but can send diagnostics to Google. According to [Google's ML Kit data disclosure](https://developers.google.com/ml-kit/android-data-disclosure), a feature that uses a bundled model collects the following for diagnostics and usage analytics:

- device information: manufacturer, model, operating system version and build, and the machine-learning hardware accelerators available;
- application information: the package name and app version;
- per-installation identifiers that are not intended to uniquely identify a user or physical device;
- performance metrics such as latency;
- API configuration such as image format and resolution;
- the size of the input and output, the feature version, the event type, and error codes.

The same page says that ML Kit encrypts this data in transit using HTTPS and does not transfer it to third parties. The list does not include the recognized text or the image itself. The iPhone and iPad app does not include ML Kit.

## Permissions

On iPhone and iPad the app asks for camera access when you choose to photograph a printed recipe. Without it you can still choose a picture from your photos or paste text.

On Android, taking a photo opens the device's camera app, so Prep Book declares no camera permission. On both platforms the app uses the system photo picker, so it declares no photo library permission either.

The Android app declares these permissions, none of which asks you for a grant:

- internet access and network state, which ML Kit brings and uses to send the diagnostics above;
- Google Play billing, for the unlock purchase;
- an internal permission that Android libraries add to protect the app's own broadcast receivers.

## Children

Prep Book is made for running a restaurant or bakery and is not directed at children. It has no accounts and no chat.

## Changes

If a future version handles anything more, this page will say so before that version ships, and the date above will change.

## Contact

Questions about this policy: [ydm2790@gmail.com](mailto:ydm2790@gmail.com)
