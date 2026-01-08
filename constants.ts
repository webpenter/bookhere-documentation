
import {
  Book,
  Settings,
  Wrench,
  Terminal,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { DocsContent } from './types';

export const DOCS_CONTENT: DocsContent = {
  getting_started: {
    title: "Getting Started",
    icon: Book,
    tags: ["welcome", "overview", "stack"],
    content: `
# Welcome to BookHere v3.0.0

Thank you for choosing BookHere, the premium property rental mobile application. This documentation will guide you through setting up your own marketplace.

### 📦 What's in the Box?
- **Mobile App Source:** Full React Native (Expo) project.
- **Homey Connector:** A custom WordPress plugin to bridge your app with the Homey Theme.
- **Documentation:** Comprehensive guides for every step of the journey.

### 🛠 Technology Stack
- **Framework:** React Native 0.79.5 (Expo SDK 53)
- **Language:** TypeScript 5.8.3
- **UI:** React Native Paper & Custom Components
- **Navigation:** React Navigation 6.x

### Key Features
- **Real-time Bookings:** Instant synchronization with WordPress backend.
- **Multi-Vendor Support:** Host profiles, property management, and dashboard.
- **Payment Integration:** Stripe-ready checkout with support for deposits.
- **Advanced Search:** Filter by date, guest count, and custom taxonomies.
    `
  },
  installation: {
    title: "Installation",
    icon: Terminal,
    tags: ["setup", "terminal", "wordpress"],
    content: `
# Installation Guide - BookHere Mobile App

Complete step-by-step installation guide for setting up the BookHere property rental mobile application.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [System Setup](#system-setup)
3. [Project Installation](#project-installation)
4. [Backend Setup](#backend-setup)
5. [Third-Party Services Configuration](#third-party-services-configuration)
6. [Running the App](#running-the-app)
7. [Troubleshooting](#troubleshooting)

---

## 📦 What You Need - Complete Setup Guide

**CONNECTOR PLUGIN INCLUDED!** 🎉

This package includes a **Homey connector plugin** that bridges the mobile app with Homey theme.

**What's Included in This Package:**

1. ✅ **Mobile App** (iOS & Android) - What this guide covers below
2. ✅ **Homey Connector Plugin** - Covered in [Backend Setup](#backend-setup) section

**What You Need to Purchase Separately:**
- **Homey WordPress Theme** (~$59-79 from ThemeForest)
  - Search "Homey" on ThemeForest.net
  - Provides the backend functionality (property management, bookings, etc.)
  - Our included plugin connects the mobile app to it

**What You Need to Provide:**
- WordPress 6.0+ (FREE from WordPress.org)
- Web hosting ($5-20/month for shared hosting - works perfectly)
- Domain name (optional but recommended)

**Installation Order:**

**Option A: Backend First (Recommended)**
1. Set up WordPress + Homey theme (30 mins) → [Skip to Backend Setup](#backend-setup)
2. Install our connector plugin (10 mins)
3. Install mobile app (30 mins) → Continue below
4. Total time: ~70 mins ✅

**Option B: Mobile App First**
1. Install mobile app (30 mins) → Continue below
2. Set up WordPress + Homey theme (30 mins) → [Backend Setup](#backend-setup)
3. Install connector plugin (10 mins)
4. Connect them together (10 mins)

**Quick Start Summary:**
- WordPress + Homey Theme + Our Connector Plugin = Complete solution ✅
- Connector plugin included (saves 40-80 hours of API development!) ✅
- Homey theme must be purchased separately (~$59-79) ⚠️

---

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

### Required Software

#### For All Platforms

| Software | Version | Download Link |
|----------|---------|---------------|
| Node.js | 18.x or higher | https://nodejs.org/ |
| npm | 8.x or higher | Included with Node.js |
| Git | Latest | https://git-scm.com/ |
| Code Editor | Any | VS Code recommended: https://code.visualstudio.com/ |

#### For iOS Development (macOS Only)

| Software | Version | Download Link |
|----------|---------|---------------|
| macOS | Catalina or higher | - |
| Xcode | 14.x or higher | Mac App Store |
| Xcode Command Line Tools | Latest | \`xcode- select--install\` |
| CocoaPods | Latest | \`sudo gem install cocoapods\` |

#### For Android Development

| Software | Version | Download Link |
|----------|---------|---------------|
| Android Studio | Latest | https://developer.android.com/studio |
| Android SDK | API Level 21+ | Included with Android Studio |
| JDK | 11 or higher | https://adoptium.net/ |

### Account Requirements

Create accounts on the following platforms (free unless noted):

- [ ] **Expo Account** - https://expo.dev (Free)
- [ ] **Google Cloud Platform** - https://console.cloud.google.com (Free tier available)
- [ ] **Stripe Account** - https://stripe.com (Free, transaction fees apply)
- [ ] **Apple Developer** - https://developer.apple.com ($99/year for App Store)
- [ ] **Google Play Developer** - https://play.google.com/console ($25 one-time for Play Store)

---

## System Setup

### Step 1: Install Node.js and npm

1. **Download Node.js**
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Run the installer and follow the prompts

2. **Verify Installation**
   \`\`\`bash
node --version
   # Should output: v18.x.x or higher

npm --version
   # Should output: 8.x.x or higher
\`\`\`

### Step 2: Install Expo CLI (Optional but Recommended)

\`\`\`bash
npm install -g expo-cli
\`\`\`

Verify installation:
\`\`\`bash
expo --version
\`\`\`

### Step 3: Install EAS CLI (For Building)

\`\`\`bash
npm install -g eas-cli
\`\`\`

Verify installation:
\`\`\`bash
eas --version
\`\`\`

### Step 4: iOS Setup (macOS Only)

1. **Install Xcode**
   - Open Mac App Store
   - Search for "Xcode"
   - Click "Get" and wait for installation (large download, ~10GB)

2. **Install Xcode Command Line Tools**
\`\`\`bash
xcode-select --install
\`\`\`

3. **Install CocoaPods**
\`\`\`bash
sudo gem install cocoapods
\`\`\`

4. **Accept Xcode License**
\`\`\`bash
sudo xcodebuild -license accept
\`\`\`

### Step 5: Android Setup

1. **Install Android Studio**
   - Download from https://developer.android.com/studio
   - Run the installer
   - Follow the setup wizard
   - Install the Android SDK, Android SDK Platform, and Android Virtual Device

2. **Set Environment Variables**

   **On macOS/Linux** - Add to \`~/.bash_profile\` or \`~/.zshrc\`:
   \`\`\`bash
   export ANDROID_HOME = $HOME / Library / Android / sdk
   export PATH = $PATH: $ANDROID_HOME/emulator
   export PATH = $PATH: $ANDROID_HOME/platform-tools
  \`\`\`

   **On Windows** - Add to System Environment Variables:
   \`\`\`bash
ANDROID_HOME = C: \Users\YourUsername\AppData\Local\Android\Sdk
  \`\`\`

3. **Reload Environment**
   \`\`\`bash
   source ~/.zshrc  # or source ~/.bash_profile
  \`\`\`

4. **Verify Android Setup**
   \`\`\`bash
adb --version
  \`\`\`

---

## Project Installation

### Step 1: Extract the Package

\`\`\`bash
# Navigate to your projects directory
cd ~/Projects

# Extract the downloaded zip file
unzip bookhere-mobile-app.zip

# Navigate to the project folder
cd bookhere-mobile-app
  \`\`\`

### Step 2: Install Dependencies

\`\`\`bash
# Using npm
npm install

# OR using Yarn (if you prefer)
yarn install
  \`\`\`

This will install all required packages from \`package.json\`. The installation may take 5-10 minutes depending on your internet connection.

### Step 3: Create Environment File

Create a \`.env\` file in the root directory:

\`\`\`bash
# Copy the example file
cp .env.example .env

# OR create a new file
touch .env
  \`\`\`

Edit \`.env\` and add your configuration:

\`\`\`env
# Google OAuth Configuration
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID = your_ios_client_id_here
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID = your_web_client_id_here
\`\`\`

**Note:** We'll configure these values in the next section.

### Step 4: Configure API URL

Open \`src/ApiUrl.js\` and update the API URL:

\`\`\`javascript
export default {
  api_url: "https://your-backend-domain.com/"
}
\`\`\`

**Important:** Replace https://your-backend-domain.com/ with your actual WordPress backend URL (must end with a slash \`/\`).

---

## Backend Setup

BookHere requires a WordPress backend with the Homey theme installed.

### Option 1: Using Existing Homey Backend

If you already have a WordPress site with Homey theme:

1. ** Ensure WordPress is Updated **
  - WordPress 6.0 or higher recommended

2. ** Verify Homey Theme is Active **
  - Go to WordPress "Admin" → "Appearance" → "Themes"
    - Ensure Homey theme is activated

3. ** Enable REST API **
  - The REST API should be enabled by default
- Test by visiting: \`https://your-domain.com/wp-json/\`
  - You should see JSON response

4. ** Configure CORS(if needed)**

  Add to \`wp-config.php\` or use a plugin:
\`\`\`php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type, Authorization');
\`\`\`

5. ** Test API Endpoints **

  Test these key endpoints in your browser or Postman:
- \`https://your-domain.com/wp-json/jwt-auth/v1/token\`(POST)
  - \`https://your-domain.com/wp-json/jwt-auth/v1/homey/search\`(GET)

### Option 2: Fresh WordPress + Homey Installation

1. ** Install WordPress **
  - Download from https://wordpress.org/download/
  - Upload to your hosting server
  - Complete the 5 - minute installation

2. ** Install Homey Theme **
  - Purchase Homey theme from ThemeForest
  - Upload and activate the theme
  - Complete Homey setup wizard

3. ** Install Required Plugins **
  - Homey Custom Post Types
  - JWT Authentication for WP REST API
  - Any other plugins required by Homey theme

4. ** Configure Permalinks **
  - Go to "Settings" → "Permalinks"
  - Select "Post name" structure
  - Save changes

### Backend Configuration Checklist

  - [ ] WordPress installed and running
  - [ ] Homey theme activated
  - [ ] Required plugins installed
  - [ ] Permalinks configured
  - [ ] REST API accessible
  - [ ] HTTPS enabled (SSL certificate)
  - [ ] CORS configured (if needed)
  - [ ] Test user accounts created

---

## Third - Party Services Configuration

### 1. Google Cloud Platform Setup(Maps & Sign - In)

#### A.Create Google Cloud Project

1. Go to https://console.cloud.google.com/
2. Click "Select a Project" → "New Project"
3. Enter project name: "BookHere"
4. Click "Create"

#### B.Enable APIs

1. Go to "APIs & Services" → "Library"
2. Search and enable these APIs:
   - ** Maps SDK for Android **
   - ** Maps SDK for iOS **
   - ** Places API **
   - ** Geocoding API **

#### C.Create API Credentials

  ** For Google Maps:**

    1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Name it "Google Maps API Key"
4. Click "Restrict Key" and select:
  - Maps SDK for Android
  - Maps SDK for iOS
  - Places API
  - Geocoding API
5. Copy the API key

  ** For Google Sign - In:**

    1. Go to "APIs & Services" → "OAuth consent screen"
2. Select "External" → Click "Create"
3. Fill in:
- App name: BookHere
  - User support email: "your@email.com"
- Developer contact: "your@email.com"
4. Click "Save and Continue"

5. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"

6. ** Create iOS Client ID:**
  - Application type: iOS
    - Name: BookHere iOS
      - Bundle ID: \`com.yourcompany.bookhere\`(use your actual bundle ID)
        - Click "Create"
          - Copy the "Client ID"

7. ** Create Web Client ID:**
  - Application type: Web application
    - Name: BookHere Web
      - Click "Create"
        - Copy the "Client ID"

#### D.Update Configuration

1. ** Update\`.env\` file:**
  \`\`\`env
   EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_IOS_CLIENT_ID_HERE
   EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_WEB_CLIENT_ID_HERE
   \`\`\`

2. ** Update\`app.json\`:**
  \`\`\`json
   {
     "expo": {
       "ios": {
         "config": {
           "googleMapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY"
         }
       },
       "android": {
         "config": {
           "googleMaps": {
             "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
           }
         }
       }
     }
   }
   \`\`\`

### 2. Stripe Setup(Payment Processing)

1. ** Create Stripe Account **
  - Go to https://stripe.com
- Click "Sign up"
  - Complete the registration

2. ** Get API Keys **
  - Go to Developers → API keys
    - Copy your "Publishable key"(starts with \`pk_test_\` for test mode)
      - Copy your "Secret key"(starts with \`sk_test_\` for test mode)

        3. ** Configure in App **

          Open\`src/screens/payment/stripe/config/helpers.ts\` and update:
\`\`\`typescript
   const publishableKey = "pk_test_YOUR_PUBLISHABLE_KEY_HERE";
   \`\`\`

4. ** Test Mode vs Live Mode **
  - Use test keys for development
    - Switch to live keys before production release
      - Never commit secret keys to version control

### 3. Expo Account Setup(For Builds)

1. ** Create Expo Account **
  - Go to https://expo.dev
- Click "Sign up"
  - Complete registration

2. ** Login via CLI **
  \`\`\`bash
   eas login
   \`\`\`

3. ** Create a Project **
  \`\`\`bash
   eas build:configure
   \`\`\`

4. ** Copy Project ID **
  - Go to https://expo.dev
- Open your project
  - Copy the Project ID

5. ** Update\`app.json\`:**
  \`\`\`json
   {
     "expo": {
       "extra": {
         "eas": {
           "projectId": "YOUR_PROJECT_ID_HERE"
         }
       }
     }
   }
   \`\`\`

### 4. Firebase Setup(Optional - for Enhanced Push Notifications)

  1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Enter project name: "BookHere"
4. Complete setup wizard

  ** For Android:**
    1. Click "Add app" → "Android"
2. Enter package name: \`com.yourcompany.bookhere\`
3. Download\`google-services.json\`
4. Place in project root

  ** For iOS:**
    1. Click "Add app" → "iOS"
2. Enter bundle ID: \`com.yourcompany.bookhere\`
3. Download\`GoogleService-Info.plist\`
4. Place in project root

---

## Running the App

### Development Mode

1. ** Start Development Server **
  \`\`\`bash
   npm start
   \`\`\`

   This will:
- Start Metro bundler
  - Open Expo Dev Tools in browser
    - Display QR code for testing

2. ** Run on iOS Simulator(macOS only) **
  \`\`\`bash
   npm run ios
   \`\`\`

   Or press\`i\` in the terminal after running\`npm start\`

3. ** Run on Android Emulator **
  \`\`\`bash
   npm run android  
   \`\`\`

   Or press\`a\` in the terminal after running\`npm start\`

### Testing on Physical Device

#### Using Expo Go(Easiest for Testing)

  1. ** Install Expo Go App **
    - iOS: https://apps.apple.com/app/expo-go/id982107779
- Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. ** Scan QR Code **
  - Run\`npm start\`
  - Scan the QR code with:
  - iOS: Camera app
    - Android: Expo Go app

      ** Note:** Expo Go has limitations with custom native modules.For full testing, use development builds.

#### Using Development Build(Recommended)

1. ** Build Development Client **
  \`\`\`bash
   # For iOS
   eas build --profile development --platform ios

   # For Android
   eas build --profile development --platform android
   \`\`\`

2. ** Install on Device **
  - Download the build from EAS dashboard
    - Install on your device

3. ** Run Development Server **
  \`\`\`bash
   npm start --dev-client
   \`\`\`

### Common Startup Issues

  ** Metro bundler error:**
    \`\`\`bash
npm start --clear
\`\`\`

    ** iOS build error:**
      \`\`\`bash
cd ios && rm -rf build && cd ..
npx expo run:ios
\`\`\`

      ** Android build error:**
        \`\`\`bash
cd android && ./gradlew clean && cd ..
npx expo run:android
\`\`\`

---

## Troubleshooting

### Installation Issues

  ** Problem:** \`npm install\` fails with errors

  ** Solution:**
    \`\`\`bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
\`\`\`

---

** Problem:** "Cannot find module" errors

  ** Solution:**
    \`\`\`bash
# Ensure all dependencies are installed
npm install

# If using CocoaPods (iOS)
cd ios && pod install && cd ..
\`\`\`

---

** Problem:** Xcode build fails

  ** Solution:**
    1. Open Xcode
2. Clean Build Folder: "Product" → "Clean Build Folder"
3. Delete Derived Data
4. Try building again

---

** Problem:** Android build fails with "SDK not found"

** Solution:**
  1. Verify "ANDROID_HOME" environment variable
2. Open Android Studio
3. Go to SDK Manager
4. Ensure Android SDK is installed

---

### Runtime Issues

  ** Problem:** App shows blank white screen

    ** Solution:**
      \`\`\`bash
# Clear cache and restart
npm start --clear
\`\`\`

---

** Problem:** "Network request failed" errors

  ** Solution:**
    1. Verify backend URL in \`src/ApiUrl.js\`
2. Ensure backend is accessible
3. Check CORS configuration
4. Test API endpoints in browser

---

** Problem:** Maps not showing

  ** Solution:**
    1. Verify Google Maps API key in \`app.json\`
2. Enable Maps SDK in Google Cloud Console
3. Ensure billing is enabled on Google Cloud project
4. Rebuild the app

---

** Problem:** Google Sign - In not working

  ** Solution:**
    1. Verify client IDs in \`.env\`
2. Ensure bundle ID / package name matches Google Cloud Console
3. Rebuild the app after changing\`.env\`

---

** Problem:** Stripe payments failing

  ** Solution:**
    1. Verify publishable key in helpers.ts
2. Ensure using test mode for development
3. Check Stripe dashboard for error logs

---

## Post - Installation Checklist

Before proceeding to customization and deployment:

- [ ] App runs on iOS simulator / device
- [ ] App runs on Android emulator / device
- [ ] Backend API connection working
- [ ] Google Maps displaying correctly
- [ ] Google Sign-In functional
- [ ] Stripe payment test successful
- [ ] Push notifications working
- [ ] All screens navigable
- [ ] No console errors
- [ ] Image uploads working
- [ ] Messaging system functional

---

## Next Steps

After successful installation:

1. **Read Configuration Guide** - [CONFIGURATION](./configuration)
   - Customize app branding
   - Configure advanced settings
   - Set up payment webhooks

2. **Read Customization Guide** - [CUSTOMIZATION](./customization)
   - Change theme colors
   - Update app icon and splash screen
   - Customize UI components

3. **Test All Features** - [FEATURES](./features)
   - Test guest features
   - Test host features
   - Test payment flows

4. ** Build for Production **
  - iOS: \`eas build --platform ios\`
    - Android: \`eas build --platform android\`

---

## Getting Help

If you encounter issues during installation:

1. ** Check Documentation **
  - Review this guide carefully
    - Check FAQ.md for common questions

2. ** Check Error Messages **
  - Read error messages carefully
    - Search for error messages online

3. ** Contact Support **
  - Email: support @webpenter.com
- Include: purchase code, error messages, screenshots
  - Describe steps to reproduce

---

** Installation Complete! ** 🎉

You're now ready to start customizing and building your property rental app.

  `
  },
  configuration: {
    title: "Configuration",
    icon: Settings,
    tags: ["env", "api", "stripe"],
    content: `
# Configuration Guide - BookHere Mobile App

Complete configuration guide for setting up and customizing BookHere mobile application.

---

## Table of Contents

1. [App Configuration](#app-configuration)
2. [Backend Integration](#backend-integration)
3. [Google Services Setup](#google-services-setup)
4. [Payment Gateway Configuration](#payment-gateway-configuration)
5. [Push Notifications Setup](#push-notifications-setup)
6. [Authentication Configuration](#authentication-configuration)
7. [Maps Configuration](#maps-configuration)
8. [App Branding](#app-branding)
9. [Build Configuration](#build-configuration)
10. [Environment Variables](#environment-variables)

---

## App Configuration

### 1. Basic App Settings (app.json)

The \`app.json\` file is the main configuration file for your Expo/React Native app.

#### Update App Identity

\`\`\`json
{
  "expo": {
    "name": "Your App Name",           // Display name
    "slug": "your-app-slug",            // URL-friendly name
    "version": "1.0.0",                 // App version
    "orientation": "portrait",          // Screen orientation
    "userInterfaceStyle": "automatic",  // Light/dark mode support

    "icon": "./src/assets/images/icon.png",  // App icon (1024x1024px)

    "splash": {
      "image": "./src/assets/book-here-splash-screen/4.jpg",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    }
  }
}
\`\`\`

#### Update Bundle Identifiers

**For iOS:**
\`\`\`json
{
  "expo": {
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.yourapp",
      "buildNumber": "1"
    }
  }
}
\`\`\`

**For Android:**
\`\`\`json
{
  "expo": {
    "android": {
      "package": "com.yourcompany.yourapp",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/icon.png",
        "backgroundColor": "#FFFFFF"
      }
    }
  }
}
\`\`\`

**Important:**
- Bundle identifier and package name must be unique (use your domain reversed)
- Format: \`com.yourcompany.appname\`
- Once published, cannot be changed
- Must match identifiers in Google Cloud Console and Apple Developer Account

#### Update App Scheme

\`\`\`json
{
  "expo": {
    "scheme": "yourapp"  // Deep linking scheme
  }
}
\`\`\`

This enables deep linking: \`yourapp://screen/details\`

---

## Backend Integration

### 1. Configure API URL

Edit \`src/ApiUrl.js\`:

\`\`\`javascript
export default {
    api_url: "https://yourdomain.com/"
}
\`\`\`

  ** Important Notes:**
    - Must be HTTPS in production
      - Must end with trailing slash\`/\`
        - Should be your WordPress site URL
          - Test the URL in browser first

            ** Example:**
              \`\`\`javascript
// Development
api_url: "https://dev.bookhere.com/"

// Production
api_url: "https://bookhere.com/"
\`\`\`

### 2. Backend API Requirements

Your WordPress backend must have these endpoints:

#### Authentication Endpoints
  \`\`\`
POST /wp-json/jwt-auth/v1/token
POST /wp-json/jwt-auth/v1/token/validate
POST /wp-json/jwt-auth/v1/user/register
\`\`\`

#### Property / Listing Endpoints
  \`\`\`
GET  /wp-json/jwt-auth/v1/homey/search
GET  /wp-json/jwt-auth/v1/listing/{id}
POST /wp-json/jwt-auth/v1/listing/add
PUT  /wp-json/jwt-auth/v1/listing/{id}
DELETE /wp-json/jwt-auth/v1/listing/{id}
\`\`\`

#### Booking Endpoints
  \`\`\`
GET  /wp-json/jwt-auth/v1/booking/list
POST /wp-json/jwt-auth/v1/booking/create
PUT  /wp-json/jwt-auth/v1/booking/{id}
\`\`\`

#### Message Endpoints
  \`\`\`
GET  /wp-json/jwt-auth/v1/messages
POST /wp-json/jwt-auth/v1/messages/send
\`\`\`

### 3. CORS Configuration

If you encounter CORS errors, add to your WordPress \`wp-config.php\`:

\`\`\`php
// Enable CORS for mobile app
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
\`\`\`

Or use a plugin like "WP CORS" for easier management.

### 4. Test Backend Connection

  \`\`\`bash
# Test API is accessible
curl https://yourdomain.com/wp-json/

# Test authentication endpoint
curl -X POST https://yourdomain.com/wp-json/jwt-auth/v1/token \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass"}'
\`\`\`

---

## Google Services Setup

### 1. Google Cloud Console Configuration

#### Create Project
1. Go to https://console.cloud.google.com/
2. Create new project: "BookHere"(or your app name)
3. Note the Project ID

#### Enable Required APIs

Enable these APIs in "APIs & Services" → "Library":

- ✅ Maps SDK for Android
  - ✅ Maps SDK for iOS
    - ✅ Places API
      - ✅ Geocoding API
        - ✅ Geolocation API

#### Create API Key for Maps

1. Go to "Credentials" → "Create Credentials" → "API Key"
2. Name: "Google Maps API Key"
3. Click "Edit API key"
4. Under "API restrictions", select:
- Maps SDK for Android
  - Maps SDK for iOS
    - Places API
    - Geocoding API
5.(Optional) Add application restrictions for security
6. Copy the API key

### 2. Google Sign - In Setup

#### Configure OAuth Consent Screen

1. Go to "OAuth consent screen"
2. Select "External"(or "Internal" if G Suite)
3. Fill required fields:
\`\`\`
   App name: BookHere
   User support email: support@yourdomain.com
   Developer contact: dev@yourdomain.com
   \`\`\`
4. Add scopes(optional):
- \`userinfo.email\`
  - \`userinfo.profile\`
5. Save

#### Create OAuth 2.0 Credentials

  ** iOS Client ID:**
    1. "Create Credentials" → "OAuth 2.0 Client ID"
2. Application type: ** iOS **
  3. Name: "BookHere iOS"
4. Bundle ID: \`com.yourcompany.yourapp\`(same as app.json)
5. Click "Create"
6. Copy the ** Client ID **

** Web Client ID(required for Google Sign - In):**
  1. "Create Credentials" → "OAuth 2.0 Client ID"
2. Application type: ** Web application **
  3. Name: "BookHere Web"
4. No need to add URIs
5. Click "Create"
6. Copy the ** Client ID **

** Android(Automatic):**
  - Google Sign - In library handles this automatically
    - Uses SHA - 1 fingerprint from your keystore

### 3. Update App Configuration

#### Update \`.env\`:
\`\`\`env
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_IOS_CLIENT_ID_HERE.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_WEB_CLIENT_ID_HERE.apps.googleusercontent.com
\`\`\`

#### Update \`app.json\`:
\`\`\`json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY"
      },
      "bundleIdentifier": "com.yourcompany.yourapp",
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
        }
      },
      "package": "com.yourcompany.yourapp",
      "googleServicesFile": "./google-services.json"
    }
  }
}
\`\`\`

### 4. Google Services Files(Optional - For Firebase)

  ** For iOS ** - \`GoogleService-Info.plist\`:
1. Go to https://console.firebase.google.com
2. Create project or use existing
3. Add iOS app with your bundle ID
4. Download\`GoogleService-Info.plist\`
5. Place in project root
6. Reference in \`app.json\` as shown above

  ** For Android ** - \`google-services.json\`:
1. In same Firebase project
2. Add Android app with your package name
3. Download\`google-services.json\`
4. Place in project root
5. Reference in \`app.json\` as shown above

---

## Payment Gateway Configuration

### 1. Stripe Configuration

#### Get Stripe Keys

1. Sign up at https://stripe.com
2. Go to Developers → API keys
3. Copy keys:
   - ** Test Publishable Key **: \`pk_test_...\`
  - ** Test Secret Key **: \`sk_test_...\`
    - ** Live Publishable Key **: \`pk_live_...\`
      - ** Live Secret Key **: \`sk_live_...\`

#### Configure in App

Edit \`src/screens/payment/stripe/config/helpers.ts\`:

\`\`\`typescript
// For Development (Test Mode)
const publishableKey = "pk_test_YOUR_TEST_KEY_HERE";

// For Production (Live Mode)
// const publishableKey = "pk_live_YOUR_LIVE_KEY_HERE";

export const initializeStripe = () => {
  return initStripe({
    publishableKey,
    merchantIdentifier: "merchant.com.yourcompany.yourapp", // For Apple Pay
    urlScheme: "yourapp", // Same as app.json scheme
  });
};
\`\`\`

#### Apple Pay Configuration(iOS)

1. Create Merchant ID in Apple Developer Console:
- Go to Certificates, IDs & Profiles → Identifiers
  - Click + → Merchant IDs
    - Register: \`merchant.com.yourcompany.yourapp\`

2. Enable in Stripe Dashboard:
- Go to Settings → Payment Methods
  - Enable Apple Pay
    - Add domain verification

3. Update \`app.json\`:
\`\`\`json
{
  "expo": {
    "ios": {
      "entitlements": {
        "com.apple.developer.in-app-payments": [
          "merchant.com.yourcompany.yourapp"
        ]
      }
    }
  }
}
\`\`\`

#### Google Pay Configuration(Android)

1. Enable in Stripe Dashboard:
- Go to Settings → Payment Methods
  - Enable Google Pay

2. No additional app configuration needed

#### Webhook Setup(Backend)

Configure Stripe webhooks in your WordPress backend:
\`\`\`
Webhook URL: https://yourdomain.com/wp-json/stripe/webhook
Events to listen: payment_intent.succeeded, payment_intent.payment_failed
\`\`\`

### 2. PayPal Configuration

Edit PayPal component file:

\`\`\`javascript
const PayPalButton = () => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: "AMOUNT_HERE",
              currency_code: "USD"
            }
          }]
        });
      }}
      onApprove={(data, actions) => {
        // Handle successful payment
      }}
    />
  );
};
\`\`\`

### 3. Thai QR Payment

Configure in the Thai QR payment component with your QR payment provider credentials.

---

## Push Notifications Setup

### 1. Expo Push Notifications

#### Configure in \`app.json\`:

\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-notifications",
        {
          "icon": "./src/assets/images/icon.png",
          "defaultChannel": "default",
          "sounds": []
        }
      ]
    ]
  }
}
\`\`\`

### 2. iOS Push Notifications(APNs)

1. ** Create APNs Key in Apple Developer Console:**
  - Go to Certificates, IDs & Profiles → Keys
    - Click + to create new key
      - Enable "Apple Push Notifications service (APNs)"
        - Download the \`.p8\` key file
          - Note the Key ID

2. ** Upload to Expo:**
  \`\`\`bash
   eas credentials
   \`\`\`
   Follow prompts to upload APNs key

### 3. Android Push Notifications(FCM)

1. ** Get Server Key from Firebase:**
  - Go to Firebase Console
    - Project Settings → Cloud Messaging
      - Copy "Server key"

2. ** Configure in Expo:**
  \`\`\`bash
   eas credentials
   \`\`\`
   Follow prompts to add FCM server key

### 4. Test Push Notifications

Use Expo's push notification tool:
  \`\`\`bash
expo push:send --to YOUR_EXPO_PUSH_TOKEN --title "Test" --body "Hello!"
\`\`\`

---

## Authentication Configuration

### 1. JWT Token Configuration

The app uses JWT tokens for authentication.Ensure your WordPress backend has JWT Authentication plugin configured.

In WordPress \`wp-config.php\`:
\`\`\`php
define('JWT_AUTH_SECRET_KEY', 'your-secret-key-here-change-this');
define('JWT_AUTH_CORS_ENABLE', true);
\`\`\`

### 2. Biometric Authentication

Already configured via plugin in \`app.json\`:

\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-local-authentication",
        {
          "faceIDPermission": "Allow $(PRODUCT_NAME) to use Face ID for secure login."
        }
      ]
    ],
    "ios": {
      "infoPlist": {
        "NSFaceIDUsageDescription": "Allow BookHere to use Face ID for secure login."
      }
    },
    "android": {
      "permissions": [
        "android.permission.USE_BIOMETRIC",
        "android.permission.USE_FINGERPRINT"
      ]
    }
  }
}
\`\`\`

### 3. Session Management

Configure token expiration in your backend:
\`\`\`php
// Token expires in 7 days
define('JWT_AUTH_EXPIRE_TIME', 7 * DAY_IN_SECONDS);
\`\`\`

---

## Maps Configuration

### 1. Google Maps API Key

Already covered in Google Services Setup.Key should be in \`app.json\`:

\`\`\`json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_API_KEY"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_API_KEY"
        }
      }
    }
  }
}
\`\`\`

### 2. Map Customization

Edit map styles in the code:

\`\`\`javascript
// Custom map style (optional)
const mapStyle = [
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{ "visibility": "off" }]
  }
];

<MapView
  customMapStyle={mapStyle}
  // other props
/>
\`\`\`

### 3. Default Map Region

Configure default map region in code:

\`\`\`javascript
const defaultRegion = {
  latitude: 37.78825,      // Your default latitude
  longitude: -122.4324,    // Your default longitude
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
\`\`\`

---

## App Branding

### 1. App Name

Update in multiple locations:

** \`app.json\`:**
  \`\`\`json
{
  "expo": {
    "name": "Your App Name"
  }
}
\`\`\`

  ** \`package.json\`:**
    \`\`\`json
{
  "name": "yourappname"
}
\`\`\`

### 2. App Icon

1. Create 1024x1024px PNG icon
2. Replace\`src/assets/images/icon.png\`
3. Icon should have:
- No transparency(use background)
  - No rounded corners(iOS handles this)
    - High resolution
      - Simple, recognizable design

### 3. Splash Screen

1. Create splash screen image(recommended: 2048x2048px)
2. Replace\`src/assets/book-here-splash-screen/4.jpg\`
3. Update \`app.json\`:

\`\`\`json
{
  "expo": {
    "splash": {
      "image": "./src/assets/book-here-splash-screen/4.jpg",
      "resizeMode": "cover",        // or "contain"
      "backgroundColor": "#ffffff"  // background color
    }
  }
}
\`\`\`

### 4. Theme Colors

Edit \`src/constants/Colors.ts\`:

\`\`\`typescript
export default {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  light: {
    background: '#FFFFFF',
    text: '#000000',
    // ... other light theme colors
  },
  dark: {
    background: '#000000',
    text: '#FFFFFF',
    // ... other dark theme colors
  }
}
\`\`\`

---

## Build Configuration

### 1. EAS Build Configuration(\`eas.json\`)

  \`\`\`json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "simulator": false
      }
    }
  },
  "submit": {
    "production": {}
  }
}
\`\`\`

### 2. Android Build Settings

For smaller APK size, ProGuard is already configured in:
\`android/gradle.properties\`

### 3. iOS Build Settings

Build number increments automatically with EAS.Manual control in \`app.json\`:

\`\`\`json
{
  "expo": {
    "ios": {
      "buildNumber": "1"
    }
  }
}
\`\`\`

---

## Environment Variables

### Development vs Production

Create multiple \`.env\` files:

** \`.env.development\`:**
  \`\`\`env
API_URL=https://dev.yourapp.com/
STRIPE_KEY=pk_test_xxx
DEBUG_MODE=true
\`\`\`

  ** \`.env.production\`:**
    \`\`\`env
API_URL=https://yourapp.com/
STRIPE_KEY=pk_live_xxx
DEBUG_MODE=false
\`\`\`

### Loading Environment Variables

In code:
\`\`\`javascript
import Constants from 'expo-constants';

const config = {
  apiUrl: Constants.expoConfig.extra.apiUrl,
  // other config
};
\`\`\`

Update \`app.json\`:
\`\`\`json
{
  "expo": {
    "extra": {
      "apiUrl": process.env.API_URL
    }
  }
}
\`\`\`

---

## Configuration Checklist

Before going to production:

** App Identity:**
  - [] App name updated
    - [] Bundle identifier / package name set
      - [] Version number correct
        - [] App icon replaced
          - [] Splash screen customized

            ** Backend:**
              - [] API URL configured
                - [] Backend accessible via HTTPS
                  - [] CORS configured
                    - [] Test authentication working

                      ** Google Services:**
                        - [] Google Maps API key added
                          - [] Maps displaying correctly
                            - [] Google Sign - In client IDs configured
                              - [] Google Sign - In tested

                                ** Payments:**
                                  - [] Stripe keys configured
                                    - [] Test payment successful
                                      - [] PayPal configured(if using)
  - [] Apple Pay merchant ID set(if using)

** Push Notifications:**
  - [] Expo push notification token working
    - [] APNs configured for iOS
      - [] FCM configured for Android
        - [] Test notification received

          ** Branding:**
            - [] Theme colors customized
              - [] App name throughout app
                - [] Logo / branding updated

                  ** Build:**
                    - [] EAS project ID set
                      - [] Build profiles configured
                        - [] Test build successful

---

## Testing Configuration

### Test API Connection
  \`\`\`bash
# In app, check console for API calls
# Look for successful responses
\`\`\`

### Test Google Maps
  - Open app
    - Navigate to map screen
      - Verify maps load

### Test Google Sign - In
  - Click "Sign in with Google"
    - Verify successful authentication

### Test Payments
  - Use Stripe test cards:
- Success: \`4242 4242 4242 4242\`
  - Decline: \`4000 0000 0000 0002\`

### Test Push Notifications
  - Send test notification
    - Verify receipt on device

---

## Need Help ?

  If configuration issues arise:

1. Check error messages in console
2. Verify all IDs match across platforms
3. Ensure URLs are correct with HTTPS
4. Review this guide carefully
5. Contact support: support @webpenter.com

---

** Configuration Complete! ** 🎉

Your app is now fully configured and ready for customization and deployment.

    `
  },
  customization: {
    title: "Customization",
    icon: Wrench,
    tags: ["branding", "ui", "colors"],
    content: `
# Customization Guide - BookHere Mobile App

Complete guide for customizing and branding the BookHere mobile application.

---

## Table of Contents

1. [Theme Customization](#theme-customization)
2. [Branding](#branding)
3. [UI Components](#ui-components)
4. [Language & Localization](#language--localization)
5. [Navigation](#navigation)
6. [Adding New Features](#adding-new-features)
7. [Styling Guide](#styling-guide)
8. [Best Practices](#best-practices)

---

## Theme Customization

### 1. Color Scheme

Edit \`src/ constants / Colors.ts\`:

\`\`\`typescript
export default {
    // Primary brand colors
    primary: '#FF5A5F',        // Main brand color
    secondary: '#00A699',      // Secondary brand color
    accent: '#FC642D',         // Accent color for highlights

    // Functional colors
    success: '#4CAF50',        // Success messages
    error: '#F44336',          // Error messages
    warning: '#FF9800',        // Warning messages
    info: '#2196F3',           // Information messages

    // Light theme
    light: {
      background: '#FFFFFF',
      backgroundSecondary: '#F7F7F7',
      text: '#484848',
      textSecondary: '#767676',
      border: '#EBEBEB',
      card: '#FFFFFF',
      shadow: '#00000020',
      tabBar: '#FFFFFF',
      tabBarInactive: '#999999',
      inputBackground: '#F7F7F7',
      inputBorder: '#DDDDDD',
      placeholder: '#A0A0A0',
    },

    // Dark theme
    dark: {
      background: '#121212',
      backgroundSecondary: '#1E1E1E',
      text: '#FFFFFF',
      textSecondary: '#B3B3B3',
      border: '#2C2C2C',
      card: '#1E1E1E',
      shadow: '#00000040',
      tabBar: '#1E1E1E',
      tabBarInactive: '#666666',
      inputBackground: '#2C2C2C',
      inputBorder: '#3C3C3C',
      placeholder: '#666666',
    },

    // Gradient colors
    gradients: {
      primary: ['#FF5A5F', '#FF385C'],
      secondary: ['#00A699', '#008B80'],
      sunset: ['#FF6B6B', '#FFE66D'],
      ocean: ['#4FACFE', '#00F2FE'],
    }
  };
\`\`\`

### 2. Typography

Edit \`src/constants/Typography.ts\` (or create if not exists):

\`\`\`typescript
export const Typography = {
  // Font families
  fonts: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },

  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};
\`\`\`

### 3. Spacing System

Edit \`src/constants/Layout.ts\`:

\`\`\`typescript
export const Layout = {
  // Spacing scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },

  // Border radius
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  // Screen padding
  padding: {
    horizontal: 16,
    vertical: 16,
  },

  // Dimensions
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
\`\`\`

### 4. Applying Theme Changes

After updating colors:

1. **Restart development server:**
   \`\`\`bash
   npm start --clear
  \`\`\`

2. **Reload app** on device/simulator

3. **Test both light and dark modes**

---

## Branding

### 1. App Icon

#### Requirements:
- Size: 1024x1024 pixels
- Format: PNG with no transparency
- No rounded corners (handled by OS)
- Safe area: Keep important content in center 90%

#### Steps:
1. Create your icon at 1024x1024px
2. Replace \`src/assets/images/icon.png\`
3. Rebuild the app:
   \`\`\`bash
   eas build --platform all --profile preview
  \`\`\`

#### Icon Generator Tools:
- https://www.appicon.co/
- https://makeappicon.com/
- Figma / Sketch / Adobe XD

### 2. Splash Screen

#### Requirements:
- Recommended: 2048x2048 pixels
- Format: JPG or PNG
- Keep important content in center safe area

#### Steps:
1. Create splash screen image
2. Replace \`src/assets/book-here-splash-screen/4.jpg\`
3. Update \`app.json\`:
   \`\`\`json
{
  "expo": {
    "splash": {
      "image": "./src/assets/book-here-splash-screen/4.jpg",
      "resizeMode": "cover",
      "backgroundColor": "#FFFFFF"
    }
  }
}
\`\`\`

### 3. App Name

Update in multiple locations:

**\`app.json\`:**
\`\`\`json
{
  "expo": {
    "name": "Your App Name"
  }
}
\`\`\`

**\`package.json\`:**
\`\`\`json
{
  "name": "yourappname"
}
\`\`\`

**Throughout the app** - Search and replace:
\`\`\`bash
# Find all instances
grep - r "BookHere" src /

# Replace in specific files
# Edit manually or use find - replace in VS Code
\`\`\`

### 4. Logo

1. Create logo in SVG or PNG format
2. Place in \`src/assets/images/\`
3. Update header logo in \`src/screens/home/components/EnhancedHeader.tsx\`:

\`\`\`typescript
<Image
  source = { require('../../assets/images/your-logo.png') }
  style = { styles.logo }
/>
\`\`\`

### 5. Brand Colors Everywhere

Update these components to use your brand colors:

- **Primary buttons**: \`src/components/Button.tsx\`
- **Tab bar**: \`src/navigation/TabMenu.tsx\`
- **Headers**: \`src/navigation/DrawerMenu.tsx\`
- **Loading indicators**: \`src/LoadingSpinner.js\`
- **Gradients**: All gradient components

---

## UI Components

### 1. Button Styles

Edit \`src/components/Button.tsx\` (or create if not exists):

\`\`\`typescript
import { Colors } from '../constants/Colors';

export const Button = ({ title, onPress, variant = 'primary' }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: Colors.primary,
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: Colors.secondary,
      color: '#FFFFFF',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: Colors.primary,
      color: Colors.primary,
    },
  };

  return (
    <TouchableOpacity
      style= { [styles.button, buttonStyles[variant]]}
      onPress = { onPress }
    >
      <Text style={ [styles.text, { color: buttonStyles[variant].color }] }>
        { title }
      </Text>
    </TouchableOpacity>
  );
};
\`\`\`

### 2. Card Components

Customize property cards in \`src/components/PropertyCard.tsx\`:

\`\`\`typescript
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: Layout.radius.lg,
    padding: Layout.spacing.md,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
\`\`\`

### 3. Input Fields

Customize inputs in form components:

\`\`\`typescript
const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light.inputBackground,
    borderWidth: 1,
    borderColor: Colors.light.inputBorder,
    borderRadius: Layout.radius.md,
    padding: Layout.spacing.md,
    fontSize: Typography.sizes.base,
    color: Colors.light.text,
  },
});
\`\`\`

### 4. Custom Components

Create reusable components in \`src/components/\`:

\`\`\`typescript
// src/components/CustomBadge.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const CustomBadge = ({ text, color = 'primary' }) => {
  const badgeColors = {
    primary: Colors.primary,
    success: Colors.success,
    warning: Colors.warning,
  };

  return (
    <View style= { [styles.badge, { backgroundColor: badgeColors[color] }]} >
      <Text style={ styles.text }> { text } </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
\`\`\`

---

## Language & Localization

### 1. Adding New Language

1. **Create translation file:**
   \`\`\`bash
touch src/localization/translations/jp.ts
\`\`\`

2. **Add translations:**
   \`\`\`typescript
// src/localization/translations/jp.ts
export default {
  common: {
    home: 'ホーム',
    search: '検索',
    favorites: 'お気に入り',
    profile: 'プロフィール',
    // ... more translations
  },
  auth: {
    login: 'ログイン',
    signup: '登録',
    // ... more translations
  },
};
\`\`\`

3. **Register language in i18n:**
   \`\`\`typescript
// src/localization/i18n.ts
import jp from './translations/jp';

i18n.translations = {
  en,
  es,
  jp,  // Add new language
};
\`\`\`

4. **Add to language selector:**
   \`\`\`typescript
// src/navigation/TabMenu.tsx or Settings screen
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'jp', name: '日本語' },  // Add here
];
\`\`\`

### 2. Using Translations in Components

\`\`\`typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{ t('common.home') }</Text>
      <Text>{ t('auth.login') }</Text>
    </View>
  );
};
\`\`\`

### 3. RTL Support

For languages like Arabic and Urdu, RTL is already configured. To add RTL to new language:

\`\`\`typescript
// src/localization/i18n.ts
import { I18nManager } from 'react-native';

const isRTL = ['ar', 'ur', 'he', 'fa'].includes(currentLanguage);
I18nManager.forceRTL(isRTL);
\`\`\`

---

## Navigation

### 1. Customizing Tab Bar

Edit \`src/navigation/TabMenu.tsx\`:

\`\`\`typescript
<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.light.tabBarInactive,
    tabBarStyle: {
      backgroundColor: Colors.light.tabBar,
      borderTopWidth: 1,
      borderTopColor: Colors.light.border,
      height: 60,
      paddingBottom: 8,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: Typography.fonts.medium,
    },
  }}
>
  {/* Tab screens */ }
</Tab.Navigator>
\`\`\`

### 2. Adding New Screen

1. **Create screen file:**
   \`\`\`typescript
// src/screens/NewScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

export const NewScreen = () => {
  return (
    <View>
      <Text>New Screen </Text>
    </View>
   );
};
\`\`\`

2. **Add to navigation:**
   \`\`\`typescript
// src/navigation/TabMenu.tsx
import { NewScreen } from '../screens/NewScreen';

<Tab.Screen
  name="NewScreen"
  component={NewScreen}
  options={{
    tabBarLabel: 'New',
    tabBarIcon: ({ color }) => (
      <Icon name="star" size={24} color={color} />
    ),
  }}
/>
\`\`\`

### 3. Customizing Headers

\`\`\`typescript
<Stack.Navigator
  screenOptions = {{
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontFamily: Typography.fonts.bold,
      fontSize: Typography.sizes.lg,
    },
    headerShadowVisible: false,
  }}
>
  {/* Screens */ }
</Stack.Navigator>
\`\`\`

---

## Adding New Features

### 1. Adding a New Payment Method

1. **Create payment component:**
   \`\`\`typescript
// src/screens/payment/NewPayment/index.tsx
import React from 'react';

export const NewPaymentMethod = ({ amount, onSuccess, onError }) => {
  const handlePayment = async () => {
    try {
      // Payment logic here
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  return (
    <View>
      {/* Payment UI */ }
    </View>
  );
};
\`\`\`

2. **Add to payment selection:**
   \`\`\`typescript
// src/screens/payment/PaymentSelection.tsx
const paymentMethods = [
  { id: 'stripe', name: 'Credit Card', component: StripePayment },
  { id: 'paypal', name: 'PayPal', component: PayPalPayment },
  { id: 'new', name: 'New Method', component: NewPaymentMethod },
];
\`\`\`

### 2. Adding Social Login

1. **Install library:**
   \`\`\`bash
npm install @react-native - firebase / auth
npx expo install expo - auth - session
  \`\`\`

2. **Create auth provider:**
   \`\`\`typescript
// src/helper/SocialAuth.ts
export const signInWithFacebook = async () => {
  // Implementation
};
\`\`\`

3. **Add to login screen:**
   \`\`\`typescript
// src/screens/auth/LoginScreen.tsx
<Button
  title = "Continue with Facebook"
  onPress = { signInWithFacebook }
/>
  \`\`\`

### 3. Adding New Dashboard Widget

\`\`\`typescript
// src/screens/dashboard/components/NewWidget.tsx
export const NewWidget = ({ data }) => {
  return (
    <View style= { styles.widget } >
      <Text style={ styles.title }> Widget Title </Text>
      {/* Widget content */ }
    </View>
  );
};

// Add to dashboard:
// src/screens/dashboard/Dashboard.tsx
import { NewWidget } from './components/NewWidget';

<NewWidget data={ widgetData } />
\`\`\`

---

## Styling Guide

### 1. Consistent Styling

Use a style system throughout:

\`\`\`typescript
// Good - Using constants
const styles = StyleSheet.create({
  container: {
    padding: Layout.spacing.md,
    backgroundColor: Colors.light.background,
    borderRadius: Layout.radius.lg,
  },
  text: {
    fontSize: Typography.sizes.base,
    color: Colors.light.text,
    fontFamily: Typography.fonts.regular,
  },
});

// Avoid - Hardcoded values
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
});
\`\`\`

### 2. Responsive Design

\`\`\`typescript
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 375;

const styles = StyleSheet.create({
  text: {
    fontSize: isSmallDevice ? 14 : 16,
  },
});
\`\`\`

### 3. Platform-Specific Styles

\`\`\`typescript
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
\`\`\`

### 4. Dark Mode Support

\`\`\`typescript
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const MyComponent = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style= {{ backgroundColor: colors.background }}>
      <Text style={ { color: colors.text } }> Hello </Text>
    </View>
  );
};
\`\`\`

---

## Best Practices

### 1. Code Organization

\`\`\`
src /
├── screens /           # Full screens
├── components /        # Reusable components
├── navigation /        # Navigation setup
├── hooks /             # Custom hooks
├── helper /            # Utility functions
├── constants /         # Constants(colors, layout, etc.)
├── assets /            # Images, fonts
└── localization /      # Translations
\`\`\`

### 2. Component Structure

\`\`\`typescript
// 1. Imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Layout, Typography } from '../constants';

// 2. Types/Interfaces
interface Props {
  title: string;
  onPress: () => void;
}

// 3. Component
export const MyComponent: React.FC<Props> = ({ title, onPress }) => {
  // Hooks
  const [state, setState] = useState();

  // Functions
  const handlePress = () => {
    onPress();
  };

  // Render
  return (
    <View style= { styles.container } >
    <Text>{ title } </Text>
    </View>
  );
};

// 4. Styles
const styles = StyleSheet.create({
  container: {
    padding: Layout.spacing.md,
  },
});
\`\`\`

### 3. Performance Optimization

\`\`\`typescript
// Use React.memo for expensive components
export const ExpensiveComponent = React.memo(({ data }) => {
  return <View>{/* Complex rendering */ } </View>;
});

// Use useCallback for functions
const handlePress = useCallback(() => {
  // Function logic
}, [dependencies]);

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return data.map(item => /* processing */);
}, [data]);
\`\`\`

### 4. Error Handling

\`\`\`typescript
try {
  const result = await apiCall();
  // Handle success
} catch (error) {
  console.error('Error:', error);
  Alert.alert('Error', 'Something went wrong');
  // Handle error gracefully
}
\`\`\`

### 5. Testing Changes

Always test on:
- [ ] iOS Simulator
- [ ] Android Emulator
- [ ] Physical iOS device
- [ ] Physical Android device
- [ ] Light mode
- [ ] Dark mode
- [ ] Different screen sizes
- [ ] Different languages
- [ ] RTL languages (if applicable)

---

## Quick Customization Checklist

Essential customizations for branding:

- [ ] Update app name in \`app.json\` and \`package.json\`
- [ ] Replace app icon at \`src/assets/images/icon.png\`
- [ ] Replace splash screen at \`src/assets/book-here-splash-screen/4.jpg\`
- [ ] Update primary color in \`src/constants/Colors.ts\`
- [ ] Update secondary color in \`src/constants/Colors.ts\`
- [ ] Update bundle identifier (iOS) in \`app.json\`
- [ ] Update package name (Android) in \`app.json\`
- [ ] Update app scheme in \`app.json\`
- [ ] Replace logo images in \`src/assets/images/\`
- [ ] Test on both iOS and Android
- [ ] Test both light and dark modes
- [ ] Rebuild app with new branding

---

## Advanced Customization

### Custom Fonts

1. **Add font files** to \`src/assets/fonts/\`
2. **Load fonts** in \`App.tsx\`:
   \`\`\`typescript
import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  'CustomFont-Regular': require('./assets/fonts/CustomFont-Regular.ttf'),
  'CustomFont-Bold': require('./assets/fonts/CustomFont-Bold.ttf'),
});
\`\`\`
3. **Use in styles:**
   \`\`\`typescript
text: {
  fontFamily: 'CustomFont-Regular',
}
\`\`\`

### Custom Animations

\`\`\`typescript
import Animated, {
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';

const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [{ scale: withSpring(isPressed ? 0.95 : 1) }],
  };
});

<Animated.View style={ animatedStyle }>
  {/* Content */ }
</Animated.View>
    \`\`\`

---

## Need Help?

For customization support:

📧 Email: support@webpenter.com
📚 Include: Your purchase code and specific customization question

---

**Happy Customizing!** 🎨

Transform BookHere into your unique property rental brand!

    `
  },
  faq: {
    title: "FAQ",
    icon: HelpCircle,
    tags: ["help", "qa", "rtl"],
    content: `
# Frequently Asked Questions (FAQ)

Common questions and answers about the BookHere mobile app.

---

## Table of Contents

1. [General Questions](#general-questions)
2. [Installation & Setup](#installation--setup)
3. [Configuration](#configuration)
4. [Features & Functionality](#features--functionality)
5. [Customization](#customization)
6. [Payments & Billing](#payments--billing)
7. [Deployment & Building](#deployment--building)
8. [Support & Licensing](#support--licensing)

---

## General Questions

### What is BookHere?

BookHere is a complete, production-ready React Native mobile application for property rentals and bookings. It's similar to Airbnb and includes features for both property guests and hosts.

### What platforms does BookHere support?

- **iOS**: iOS 12.0 and higher
- **Android**: Android 5.0 (API 21) and higher

### Do I need a backend to use this app?

Yes, BookHere requires a WordPress backend with the Homey theme installed. The app communicates with the backend via REST API endpoints.

### Is the source code included?

Yes, you receive the complete React Native source code that you can modify and customize.

### Can I use this for my commercial project?

Yes, with the appropriate ThemeForest license (Regular or Extended), you can use this in your commercial projects.

### What technologies is this built with?

- **React Native** 0.79.5
- **Expo** SDK 53
- **TypeScript** 5.8.3
- **React Navigation** 6.x
- **React Native Paper** 4.12.8

---

## Backend & Infrastructure

### Is a backend included with this purchase?

**Partially!** The **connector plugin is included**, but you need to purchase the backend theme separately.

**What's Included:**
- ✅ BookHere-Homey Connector Plugin (bridges app with Homey theme)
- ✅ Mobile-optimized REST API endpoints
- ✅ Easy installation & configuration guide
- ✅ Saves you 40-80 hours of custom API development!

**What's NOT Included (Must Purchase Separately):**
- ❌ Homey WordPress Theme (~$59-79 from ThemeForest)
  - This provides the actual backend (property management, bookings, etc.)
  - Our plugin connects your mobile app to it

### What backend do I need?

**You need two things:**

1. **Homey WordPress Theme** (Purchase separately)
   - Cost: ~$59-79 on ThemeForest
   - Search "Homey" on ThemeForest.net
   - Provides complete property rental backend functionality

2. **WordPress Installation** (Free)
   - WordPress 6.0+ from WordPress.org
   - Web hosting with PHP & MySQL ($5-20/month)

**Our Included Connector Plugin:**
- Bridges mobile app with Homey theme
- Provides mobile-optimized API endpoints
- Handles authentication, data sync, push notifications
- Easy to install and configure

### Do I need to buy the Homey theme?

**YES!** ✅ Homey theme is required for the backend.

**Why Homey Theme is Needed:**
- Provides the property management system
- Handles bookings and reservations
- Manages payments and transactions
- Includes admin dashboard for hosts
- Search and filtering system
- User management

**What Our Included Plugin Does:**
- Connects your mobile app to Homey
- Provides mobile-optimized APIs
- Handles mobile-specific features
- You DON'T need to build custom APIs yourself (saves 40-80 hours!)

**Total Cost:**
- BookHere package: (your purchase)
- Homey theme: ~$59-79 (one-time)
- Web hosting: $5-20/month

### What exactly is the BookHere API Plugin?

It's a complete WordPress plugin (included in your purchase) that provides:

**Technical Features:**
- JWT authentication endpoints
- Property CRUD operations (Create, Read, Update, Delete)
- Booking management system
- Payment gateway webhooks (Stripe, PayPal)
- Real-time messaging backend
- Review & rating system
- Advanced search with filters
- User role management (Guest/Host/Admin)
- Earnings calculation & analytics
- Media upload handling
- Push notification integration

**User-Friendly:**
- Simple installation via WordPress admin
- Configuration wizard for easy setup
- Admin dashboard to manage everything
- Compatible with standard WordPress hosting

### How long does backend setup take?

**Super Fast!** ⚡

With our included plugin:
1. Install WordPress: 10 minutes (most hosts have 1-click install)
2. Upload our API plugin: 2 minutes
3. Activate & configure: 15 minutes
4. Connect mobile app: 5 minutes

**Total: 30-45 minutes** ✅

Compare this to building a custom backend: 40-80 hours!

### What hosting do I need?

Any standard WordPress hosting works! No special requirements.

**Recommended Hosting Providers:**
- **Shared Hosting** ($5-15/month): SiteGround, Bluehost, HostGator
  - Perfect for starting out
  - Handles 1,000-10,000 users easily

- **Managed WordPress** ($20-50/month): WP Engine, Kinsta, Flywheel
  - Better performance
  - Automatic backups & updates

- **VPS** ($20-50/month): DigitalOcean, Linode, Vultr
  - More control
  - Better for scaling

- **Cloud** ($10-100/month): AWS, Google Cloud, Azure
  - Maximum scalability
  - Pay for what you use

**For most users:** Start with shared hosting ($5-15/month). Upgrade later if needed.

### What's the total cost to get started?

**Complete breakdown:**

**One-time costs:**
- BookHere package (mobile app + connector plugin): (your purchase) ✅
- **Homey WordPress theme: $59-79** (required - purchase from ThemeForest)
- Domain name: $10-15/year (optional)
- SSL certificate: FREE (Let's Encrypt) ✅

**Monthly costs:**
- Web hosting: $5-20/month (shared hosting works fine)
- Transaction fees: 2.9% + $0.30 per booking (Stripe, when you start earning)

**Total first year:** Your purchase + $59-79 (theme) + $60-240 (hosting) = ~$119-319 total

**What You Save:**
- ✅ 40-80 hours of custom API development (would cost $2,000-4,000!)
- ✅ Mobile app development (would cost $8,000-15,000!)
- ✅ Our connector plugin makes integration seamless

**Compared to building from scratch:** You save $10,000-19,000!

### Can I use my existing WordPress website?

**Yes!** Absolutely!

If you already have a WordPress website:
1. Simply install our API plugin
2. Configure the plugin settings
3. Connect the mobile app
4. Your existing website continues working normally

The API plugin doesn't interfere with your website. It just adds API endpoints for the mobile app.

### What if I already have a property rental website (non-WordPress)?

You have options:

**Option 1: Use our WordPress plugin (Easiest)**
- Set up WordPress on a subdomain (e.g., api.yoursite.com)
- Install our plugin
- Mobile app connects to this subdomain
- Your main website stays unchanged

**Option 2: Build custom integration (Advanced)**
- Modify the mobile app to work with your existing API
- Requires development skills
- API documentation provided

**Option 3: Hybrid approach**
- Use our WordPress backend for mobile app
- Keep your existing website for web users
- Sync data between both (requires custom integration)

### Do I need technical skills to set up the backend?

**No! Basic WordPress knowledge is enough.**

If you can:
- ✅ Install WordPress (or use 1-click installer)
- ✅ Upload a plugin via WordPress admin
- ✅ Fill out a settings form
- ✅ Copy-paste a URL

Then you can set up the backend! 🎉

**We provide:**
- Step-by-step installation guide with screenshots
- Configuration wizard in the plugin
- Video tutorial (coming soon)
- Email support if you get stuck

### Can I test the app without setting up hosting?

**Demo Options:**

1. **Use local WordPress** (Fastest for testing)
   - Install XAMPP or MAMP on your computer (free)
   - Run WordPress locally
   - Install our plugin
   - Test app connecting to localhost
   - Takes 30 minutes to set up

2. **Use free hosting temporarily**
   - 000webhost.com, InfinityFree (free tier)
   - Install WordPress + our plugin
   - Test before buying paid hosting

3. **Request demo access**
   - Email support@webpenter.com with purchase code
   - We can provide temporary demo backend access

### Can you set up the backend for me?

**DIY (Recommended):** Setup is very easy with our guide

**Professional Setup Services:**
- Not included in base package
- Available as paid service: Email support@webpenter.com for quote
- Typical cost: $50-150 for complete setup
- Includes: WordPress installation, plugin configuration, app connection

**Freelancer Setup:**
- Any WordPress freelancer can help
- Should take them 30-60 minutes
- Provide them with our installation guide

### What happens if my backend is down?

**Mobile app shows error messages** and can't function until backend is back online.

**Prevent downtime:**
- Choose reliable hosting (99.9%+ uptime SLAs)
- Set up automatic backups (most hosts include this)
- Use monitoring service (free): UptimeRobot.com
- Keep WordPress & plugin updated

**Most shared hosting providers** have 99.9% uptime = less than 9 hours downtime per year.

### Is the plugin compatible with my WordPress theme?

**Yes!** The API plugin is backend-only and works with ANY WordPress theme.

**Compatible with:**
- ✅ Any WordPress theme (default themes, premium themes, custom themes)
- ✅ Page builders (Elementor, WPBakery, Divi, etc.)
- ✅ WooCommerce (if you want e-commerce features)
- ✅ Multilingual plugins (WPML, Polylang)
- ✅ Most popular WordPress plugins

The API plugin provides REST endpoints. It doesn't affect your WordPress frontend/theme at all.

---

## Installation & Setup

### How long does installation take?

Basic installation takes 15-30 minutes. Complete setup with backend configuration and third-party services can take 2-4 hours.

### Do I need a Mac to develop this app?

- **For iOS development**: Yes, macOS is required for iOS builds and testing
- **For Android only**: No, you can develop on Windows, Mac, or Linux

### What if I don't have React Native experience?

Basic knowledge of React Native and JavaScript is recommended. However, we provide comprehensive documentation to help you get started.

### Can I test the app without building it?

Yes, use Expo Go app to test on physical devices during development without building.

### Do I need paid developer accounts?

- **For testing**: No
- **For App Store submission**: Yes, Apple Developer ($99/year)
- **For Play Store submission**: Yes, Google Play Developer ($25 one-time)

### Installation fails with "Cannot find module" errors

This usually means dependencies weren't installed correctly:
\`\`\`bash
rm - rf node_modules package-lock.json
npm install
  \`\`\`

---

## Configuration

### Where do I configure the backend URL?

Edit \`src / ApiUrl.js\`:
\`\`\`javascript
export default {
  api_url: "https://yourdomain.com/"
}
  \`\`\`

### How do I get Google Maps API key?

1. Go to https://console.cloud.google.com/
2. Create a project
3. Enable Maps SDK for iOS and Android
4. Create credentials → API Key
5. Add to \`app.json\`

### Where do I put my Stripe keys?

Edit \`src/screens/payment/stripe/config/helpers.ts\` and update the \`publishableKey\` constant.

### How do I change the app name?

Update in multiple locations:
- \`app.json\` - \`expo.name\`
- \`package.json\` - \`name\` field
- Throughout the app code (search and replace)

### Can I use a different backend instead of WordPress?

Technically yes, but you'll need to modify the API integration code to match your backend's API endpoints. This requires intermediate to advanced development skills.

### How do I configure push notifications?

1. Create Expo account
2. Get your project ID from expo.dev
3. Add to \`app.json\` under \`extra.eas.projectId\`
4. For iOS: Configure APNs
5. For Android: Configure FCM (usually automatic)

---

## Features & Functionality

### Does it support multiple languages?

Yes, 10 languages are included:
- English, Spanish, Portuguese, French, German
- Russian, Chinese, Arabic (RTL), Urdu (RTL), Hindi

### Can I add more languages?

Yes! Create a new translation file in \`src/localization/translations/\` and register it in the i18n configuration.

### Does it support dark mode?

Yes, automatic dark mode is fully supported based on device settings.

### Can users book properties instantly?

Yes, the app includes instant booking functionality with payment processing.

### Is messaging real-time?

The app supports messaging between guests and hosts. Real-time updates depend on your backend implementation.

### Can hosts add properties from the mobile app?

Yes, hosts can add and manage properties using a 7-step wizard directly from the app.

### Does it support multiple payment methods?

Yes, included payment methods:
- Stripe (Credit/Debit cards)
- PayPal
- Thai QR Payment

### How does the favorites/wishlist work?

Users can save properties to their favorites list for quick access later. Favorites are synced with the backend.

### Is there a review/rating system?

Yes, guests can leave reviews and ratings for properties they've stayed at.

---

## Customization

### How do I change the color scheme?

Edit \`src/constants/Colors.ts\` and update the primary, secondary, and other color values.

### Can I change the app icon and splash screen?

Yes:
- **Icon**: Replace \`src/assets/images/icon.png\` (1024x1024px)
- **Splash**: Replace \`src/assets/book-here-splash-screen/4.jpg\`

### How do I add custom fonts?

1. Add font files to \`src/assets/fonts/\`
2. Load fonts in \`App.tsx\` using \`useFonts\`
3. Update \`Typography.ts\` with font names
4. Use in StyleSheets

### Can I modify the UI components?

Yes, all components are customizable. Edit files in \`src/components/\` and \`src/screens/\`.

### How do I add a new screen/page?

1. Create component in \`src/screens/\`
2. Add to navigation in \`src/navigation/\`
3. Configure navigation options

### Can I remove features I don't need?

Yes, you can remove unused features by:
- Removing screen components
- Updating navigation
- Removing dependencies (if applicable)

### Is the code documented?

Yes, the code includes comments and the documentation package provides comprehensive guides.

---

## Payments & Billing

### Is Stripe the only payment option?

No, PayPal and Thai QR payment are also included. You can add more payment gateways by integrating their SDKs.

### Do I need a Stripe account?

Yes, if you want to accept credit/debit card payments. Create a free account at https://stripe.com

### How do I test payments without real money?

Use Stripe test mode with test card numbers:
- Success: \`4242 4242 4242 4242\`
- Decline: \`4000 0000 0000 0002\`

### Does the app handle payment processing fees?

The app displays prices and processes payments. Stripe charges transaction fees (usually 2.9% + $0.30 per transaction).

### Can I use this in my country?

The app works globally. Check if Stripe and your chosen payment gateways support your country.

### How are host payouts handled?

The app includes a wallet/earnings dashboard for hosts. You'll need to implement the actual payout logic in your backend.

---

## Deployment & Building

### How do I build the app for production?

Using EAS Build:
\`\`\`bash
# iOS
eas build --platform ios --profile production

# Android
eas build --platform android --profile production
  \`\`\`

### Do I need a Mac to build for iOS?

No, EAS Build (Expo's cloud build service) can build iOS apps from any platform.

### How do I submit to App Store?

\`\`\`bash
eas submit --platform ios
  \`\`\`
Follow Apple's guidelines and provide required assets (screenshots, descriptions, etc.)

### How do I submit to Play Store?

\`\`\`bash
eas submit --platform android
  \`\`\`
Provide required Play Store assets and information.

### How long does App Store review take?

- **Apple**: Usually 1-3 days
- **Google**: Usually 1-2 days (sometimes hours)

### Can I update the app after it's published?

Yes, you can push updates using:
- **EAS Update**: For JavaScript/React changes (instant)
- **New Build**: For native code changes (requires store review)

### What's the difference between APK and AAB?

- **APK**: Android Package, for direct installation and testing
- **AAB**: Android App Bundle, required for Play Store (Google generates optimized APKs)

### Why is my app size so large?

Check \`APK_SIZE_OPTIMIZATION_GUIDE.md\` for tips on reducing app size. The app is already optimized to 30-40MB per architecture.

---

## Support & Licensing

### What support is included?

- 6 months of support from purchase date
- Bug fixes and issue resolution
- Installation and configuration help
- General usage questions

### What's NOT included in support?

- Custom development or new features
- Third-party service setup (beyond guidance)
- Server/hosting management
- App Store submission process

### How do I contact support?

Email: support@webpenter.com

Include:
- Your purchase code
- Detailed issue description
- Screenshots/error messages
- Steps to reproduce

### What's the difference between Regular and Extended License?

**Regular License:**
- Use in one project
- End users charged once or free

**Extended License:**
- Use in SaaS/subscription products
- End users charged on recurring basis

See: https://themeforest.net/licenses

### Can I get a refund?

Per ThemeForest policy, refunds are only granted if the item doesn't work as described or has major issues.

### Can I hire you for custom development?

Yes, contact us at support@webpenter.com for a quote on custom work.

### Will this work with the latest React Native version?

The app uses React Native 0.79.5. Upgrading to newer versions may require code changes. We provide updates to support new RN versions.

### Is WordPress Homey theme included?

No, the Homey WordPress theme must be purchased separately from ThemeForest.

### Can I use a different WordPress theme?

You'd need to modify the API integration to match your theme's API endpoints. This requires development work.

---

## Technical Questions

### Why can't I see Google Maps?

Common causes:
1. API key not configured in \`app.json\`
2. Maps SDK not enabled in Google Cloud Console
3. Billing not enabled on Google Cloud project
4. Wrong API key or restrictions

### Google Sign-In isn't working

Check:
1. Client IDs configured in \`.env\`
2. Bundle ID/package matches Google Cloud Console
3. App rebuilt after changing \`.env\`

### App crashes on startup

Try:
1. Clear cache: \`npm start --clear\`
2. Reinstall dependencies: \`rm - rf node_modules && npm install\`
3. Check console for error messages

### Images not uploading

Verify:
1. Backend API endpoint is correct
2. File size limits on server
3. Proper permissions in app
4. Network connectivity

### How do I enable debug mode?

\`\`\`bash
# React Native debugger
npm start
# Then press 'j' for JavaScript debugger
\`\`\`

### Can I use with Expo Go?

For development testing, yes. However, some native features may not work in Expo Go. Use development builds for full testing.

### How do I update dependencies?

\`\`\`bash
# Check for updates
npm outdated

# Update specific package
npm update package - name

# Update all(carefully!)
npm update
  \`\`\`

**Note:** Major updates may require code changes.

---

## Best Practices

### Should I modify the core files?

It's better to:
- Create new components for custom features
- Use configuration files for settings
- Document your changes

### How do I keep my customizations when updating?

- Use version control (Git)
- Create custom components separately
- Document changes in your own files
- Merge updates carefully

### What should I test before launching?

- [ ] All screens navigate correctly
- [ ] Backend API connection works
- [ ] Login/signup functional
- [ ] Property search works
- [ ] Booking flow complete
- [ ] Payment processing successful
- [ ] Notifications working
- [ ] Images upload properly
- [ ] Both iOS and Android
- [ ] Light and dark modes
- [ ] Multiple languages
- [ ] Different screen sizes

---

## Troubleshooting Quick Fixes

### Build fails

\`\`\`bash
# Clear everything and rebuild
rm -rf node_modules ios/build android/build
npm install
  \`\`\`

### Metro bundler errors

\`\`\`bash
npm start --clear
  \`\`\`

### iOS build issues

\`\`\`bash
cd ios
rm -rf build
pod deintegrate
pod install
cd..
\`\`\`

### Android build issues

\`\`\`bash
cd android
./gradlew clean
cd..
\`\`\`

### Environment changes not reflecting

\`\`\`bash
# Clear cache
npm start --clear

# Rebuild app
eas build --platform all --profile development
  \`\`\`

---

## Still Have Questions?

If your question isn't answered here:

1. **Check Documentation:**
   - INSTALLATION
   - CONFIGURATION
   - CUSTOMIZATION
   - TROUBLESHOOTING

2. **Search Error Messages:**
   - Google the exact error
   - Check Stack Overflow
   - Search React Native docs

3. **Contact Support:**
   - Email: support@webpenter.com
   - Include purchase code
   - Provide detailed information

---

## Useful Resources

- **React Native Docs**: https://reactnative.dev/docs/getting-started
- **Expo Docs**: https://docs.expo.dev/
- **React Navigation**: https://reactnavigation.org/docs/getting-started
- **Stripe Docs**: https://stripe.com/docs/payments
- **Google Maps**: https://developers.google.com/maps/documentation

---

**Need More Help?**

Don't hesitate to reach out to our support team at support@webpenter.com with your purchase code.

    `
  },
  security: {
    title: "Security & License",
    icon: ShieldCheck,
    tags: ["legal", "safety", "privacy"],
    content: `
# Security Policy

BookHere - Property Rental Mobile App

---

## Table of Contents

1. [Security Best Practices](#security-best-practices)
2. [API Keys & Credentials](#api-keys--credentials)
3. [Data Protection](#data-protection)
4. [Common Security Issues](#common-security-issues)
5. [Reporting Vulnerabilities](#reporting-vulnerabilities)
6. [Security Checklist](#security-checklist)

---

## Security Best Practices

### 1. Environment Variables

**✅ DO:**
- Store all sensitive credentials in \`.env\` file
- Use \`.env.example\` as a template (no real credentials)
- Add \`.env\` to \`.gitignore\`
- Use different credentials for development/production
- Never commit \`.env\` to version control

**❌ DON'T:**
- Hardcode API keys in source code
- Share \`.env\` file publicly
- Include credentials in screenshots or documentation
- Commit API keys to Git
- Use production keys in development

**Example:**
\`\`\`env
# .env (never commit this)
STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_REAL_KEY

# .env.example (safe to commit)
STRIPE_PUBLISHABLE_KEY=YOUR_STRIPE_PUBLISHABLE_KEY_HERE
\`\`\`

---

### 2. API Keys Management

#### Google Maps API Key
- **Restrict** key usage in Google Cloud Console
- Add application restrictions (iOS bundle ID, Android package name)
- Add API restrictions (only enable needed APIs)
- Monitor usage in Google Cloud Console
- Rotate keys if exposed

#### Stripe Keys
- **Never** expose secret keys in client code
- Use publishable keys only in mobile app
- Process payments through your backend
- Use test mode keys for development
- Enable webhook signing

#### Other API Keys
- Follow principle of least privilege
- Use separate keys for each environment
- Implement key rotation policy
- Monitor for unusual activity

---

## API Keys & Credentials

### What Should NEVER Be in Source Code

❌ API Keys and Secrets
❌ Database Credentials
❌ Payment Gateway Secret Keys
❌ OAuth Client Secrets
❌ Encryption Keys
❌ Private Keys (.p12, .p8, .pem)
❌ AWS/Cloud Credentials
❌ Firebase Admin SDK Keys

### What Can Be in Source Code

✅ Publishable API Keys (with restrictions)
✅ Public Configuration
✅ App Scheme/Bundle ID
✅ Non-sensitive URLs

---

## Data Protection

### 1. User Data Storage

**Local Storage (On Device):**
- Use \`expo-secure-store\` for sensitive data
- Never store passwords in plain text
- Encrypt user tokens
- Clear sensitive data on logout
- Don't cache sensitive API responses

**Example:**
\`\`\`typescript
import * as SecureStore from 'expo-secure-store';

// Store securely
await SecureStore.setItemAsync('authToken', token);

// Retrieve
const token = await SecureStore.getItemAsync('authToken');

// Delete on logout
await SecureStore.deleteItemAsync('authToken');
\`\`\`

### 2. Network Security

**HTTPS Only:**
- All API calls must use HTTPS
- No HTTP in production
- Verify SSL certificates
- Use certificate pinning for extra security (advanced)

**API Communication:**
\`\`\`typescript
// ✅ Good
const API_URL = 'https://your-backend.com';

// ❌ Bad
const API_URL = 'http://your-backend.com';
\`\`\`

### 3. Authentication Tokens

**JWT Tokens:**
- Store in secure storage
- Include expiration
- Implement token refresh
- Clear on logout
- Validate on backend

**Biometric Auth:**
- Use as additional security layer
- Still require password as fallback
- Store biometric availability, not biometric data

---

## Common Security Issues

### 1. SQL Injection (Backend)
While this is a mobile app, ensure your WordPress backend:
- Uses prepared statements
- Sanitizes all inputs
- Validates data types
- Escapes output

### 2. XSS (Cross-Site Scripting)
- Sanitize user inputs before displaying
- Use React's built-in XSS protection
- Don't use \`dangerouslySetInnerHTML\` unless necessary
- Validate URLs before opening

### 3. Insecure Data Storage
\`\`\`typescript
// ❌ Bad - AsyncStorage for sensitive data
await AsyncStorage.setItem('password', password);

// ✅ Good - SecureStore for sensitive data
await SecureStore.setItemAsync('authToken', token);
\`\`\`

### 4. Unencrypted Communication
\`\`\`typescript
// ❌ Bad
fetch('http://api.example.com/user/data')

// ✅ Good
fetch('https://api.example.com/user/data')
  \`\`\`

### 5. Insufficient Authentication
- Always validate tokens on backend
- Implement session timeout
- Use secure password requirements
- Enable 2FA where possible

---

## Reporting Vulnerabilities

If you discover a security vulnerability:

### Contact
**Email:** security@webpenter.com (or support@webpenter.com)

### What to Include
1. Description of the vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested fix (if any)
5. Your contact information

### Response Time
- **Acknowledgment:** Within 48 hours
- **Initial Assessment:** Within 1 week
- **Fix Timeline:** Depends on severity

### Disclosure Policy
- Please allow us reasonable time to fix
- We'll credit you in release notes (if desired)
- Coordinate public disclosure timing

---

## Security Checklist

### Before Development

- [ ] Create \`.env\` file from \`.env.example\`
- [ ] Verify \`.env\` is in \`.gitignore\`
- [ ] Use test API keys for development
- [ ] Enable HTTPS on backend
- [ ] Set up error monitoring (Sentry, etc.)

### During Development

- [ ] No hardcoded credentials
- [ ] Use SecureStore for sensitive data
- [ ] All API calls use HTTPS
- [ ] Validate all user inputs
- [ ] Sanitize data before display
- [ ] Implement proper error handling
- [ ] Don't log sensitive data
- [ ] Use environment variables

### Code Review Checklist

- [ ] No API keys in source code
- [ ] No passwords or secrets
- [ ] Proper input validation
- [ ] Secure data storage
- [ ] HTTPS for all API calls
- [ ] Error messages don't leak info
- [ ] Authentication properly implemented
- [ ] Authorization checks in place

### Before Production

- [ ] Switch to production API keys
- [ ] Review all environment variables
- [ ] Enable SSL/TLS on backend
- [ ] Implement rate limiting (backend)
- [ ] Set up monitoring and alerts
- [ ] Enable Stripe webhook signatures
- [ ] Restrict API keys in cloud consoles
- [ ] Test all payment flows
- [ ] Verify data encryption
- [ ] Check authentication flows
- [ ] Review error messages
- [ ] Enable security headers (backend)

### iOS/Android Specific

**iOS:**
- [ ] Enable App Transport Security
- [ ] Use keychain for sensitive data
- [ ] Implement Face ID/Touch ID securely
- [ ] Configure proper entitlements
- [ ] Enable data protection

**Android:**
- [ ] Use EncryptedSharedPreferences
- [ ] Enable ProGuard/R8 obfuscation
- [ ] Configure network security config
- [ ] Use Fingerprint/Biometric API correctly
- [ ] Enable backup encryption

---

## Security Configuration

### 1. App Transport Security (iOS)

Already configured in \`app.json\`, but verify:

\`\`\`json
{
  "ios": {
    "infoPlist": {
      "NSAppTransportSecurity": {
        "NSAllowsArbitraryLoads": false
      }
    }
  }
}
\`\`\`

### 2. Network Security (Android)

Create \`android/app/src/main/res/xml/network_security_config.xml\`:

\`\`\`xml
<? xml version = "1.0" encoding = "utf-8" ?>
<network-security-config>
  <base-config cleartextTrafficPermitted = "false" >
    <trust-anchors >
      <certificates src="system" />
    </trust-anchors>
  </base-config>
</network-security-config>
\`\`\`

### 3. ProGuard Rules (Android)

The app includes ProGuard configuration for code obfuscation.
Verify \`android/app/proguard-rules.pro\` includes:

\`\`\`proguard
# Keep React Native
  - keep class com.facebook.react.** { *; }

# Keep Expo
  - keep class expo.modules.** { *; }

# Keep your app classes
  - keep class com.yourcompany.yourapp.** { *; }
    \`\`\`

---

## Security Best Practices by Feature

### Payment Processing
- **✅** Use Stripe/PayPal SDKs (don't implement yourself)
- **✅** Process payments through backend
- **✅** Use webhook signatures
- **✅** Implement idempotency
- **❌** Never store credit card numbers
- **❌** Never log payment details

### User Authentication
- **✅** Use JWT with expiration
- **✅** Implement token refresh
- **✅** Hash passwords (backend)
- **✅** Use HTTPS for auth endpoints
- **✅** Implement rate limiting
- **❌** Never store plain-text passwords
- **❌** Don't expose user IDs in URLs

### File Uploads
- **✅** Validate file types
- **✅** Limit file sizes
- **✅** Scan for malware (backend)
- **✅** Use secure URLs
- **❌** Don't execute uploaded files
- **❌** Don't trust file extensions

---

## Compliance

### GDPR (If applicable)
- Obtain user consent for data collection
- Provide data export functionality
- Implement data deletion
- Have privacy policy
- Use data minimization

### PCI DSS (Payment Card Industry)
- Use certified payment processors (Stripe)
- Don't store card data
- Use tokenization
- Implement secure transmission

### CCPA (California Consumer Privacy Act)
- Disclose data collection practices
- Provide opt-out mechanisms
- Honor data deletion requests

---

## Incident Response Plan

### If Credentials Are Exposed

1. **Immediately** rotate all affected credentials
2. Review access logs for unauthorized use
3. Notify affected users if data was accessed
4. Update documentation
5. Implement additional safeguards

### If Vulnerability Is Found

1. Assess severity and impact
2. Develop and test fix
3. Deploy fix to production
4. Notify users if necessary
5. Document in security advisory

---

## Resources

### Security Tools
- **Dependency Scanning:** \`npm audit\`
- **Code Analysis:** ESLint with security plugins
- **Secret Scanning:** git-secrets, truffleHog
- **Monitoring:** Sentry for error tracking

### Security Guidelines
- OWASP Mobile Security Project
- OWASP Top 10
- React Native Security Best Practices
- Expo Security Considerations

### Commands
\`\`\`bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Check for exposed secrets
git log -p | grep -i "api[_-]key\|password"
  \`\`\`

---

## Conclusion

Security is an ongoing process, not a one-time task. Stay informed about:
- New vulnerabilities in dependencies
- Security updates for React Native and Expo
- Best practices in mobile security
- Changes in compliance requirements

**Remember:** Security starts with you. Follow these guidelines and stay vigilant.

---

**Last Updated:** January 2026

For security concerns: security@webpenter.com


    `
  }
};

export const APP_VERSION = "v3.0.0";
export const SUPPORT_EMAIL = "support@webpenter.com";
export const DEMO_URL = "https://demo.bookhere.app";
