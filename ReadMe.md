# Ionic Vue Crime Logger

This is an Ionic Vue project for a crime logging application. It allows users to report and track criminal activities in their area.

## Setup with SupaBase

To get started with this project, you will need to set up SupaBase as the backend. Follow these steps:

1. Sign up for a SupaBase account at [https://supabase.io](https://supabase.io).
2. Create a new project and obtain the API URL and API Key.
3. Rename the `.env.example` file to `.env` and replace the placeholders with your SupaBase API URL and API Key.

## Customizing Variables

Before running the app, make sure to customize the variables in the `.env` file according to your needs. These variables include:

- `VITE_APP_SUPABASE_URL`: The SupaBase API URL.
- `VITE_APP_SUPABASE_ANON_KEY`: The SupaBase API Key.
- `VITE_APP_NAME`: The name of the app.
- `VITE_APP_URL`: The URL of the app.
- `VITE_APP_MAPBOX_ACCESS_TOKEN`: Your Mapbox access token for displaying maps.
- `VITE_APP_DEFAULT_LOCATION`: The default location to center the map on.
- `VITE_APP_DEFAULT_ZOOM`: The default zoom level for the map.

## Installation

### Web

To run the app on the web, follow these steps:

1. Install the dependencies by running `npm install` after `cd`-ing into the `Frontend` directory.
2. Start the development server with `npm run serve`.
3. Open your browser and navigate to `http://localhost:8080` to access the app.

### Android

To install the app on Android, follow these steps:

1. Make sure you have the Android development environment set up.
2. Connect your Android device to your computer.
3. Enable USB debugging on your Android device.
4. Run `npm run build` after `cd`-ing into the `Frontend` directory to build the app.
5. Run `ionic capacitor add android` to add the Android platform.
6. Run `ionic capacitor copy android` to copy the app to the Android platform.
7. Run `ionic capacitor open android` to open the app in Android Studio.
8. Build and run the app from Android Studio on your connected device.

That's it! You should now have the Ionic Vue Crime Logger app up and running on both web and Android.
