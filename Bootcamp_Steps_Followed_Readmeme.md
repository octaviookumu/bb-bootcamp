# Steps I Followed for the Backbase Bootcamp

Table Of Contents:

3. [User Stories](#user-stories)
    1. [Project Setup](#1-project-setup)
    2. [Generate Theme](#2-generate-theme)
    3. [Font Family](#3-add-a-unique-font-family)
    4. [Navigation](#4-navigation)
    5. [Navigation Submenu](#5-navigation-submenu)
    6. [Accounts Summary](#6-accounts-summary)
    7. [Transactions](#7-transactions)
    8. [Pockets](#8-pockets)
    9. [Entitlements (Within Journey)](#9-entitlements-within-journey)
    10. [Entitlements (Navigation)](#10-entitlements-navigation)


### #2: Generate Theme
Within the peachtree-bank/src/app/themes directory, I adjusted the colours for the following in their respective folders:

1. Primary: #27AD60
2. Secondary: #30292F
3. Info: #5D737E
4. Background Color: #F8FBF4
5. Warning: #FA9975

### #3. Add a unique font family
Steps:

1. I downloaded the `Mukta` and added it to the peachtree-bank/src/app/themes/peachtree-bank/assets/fonts directory: 
2. I also created their font-faces within the peachtree-bank/src/app/themes/peachtree-bank/scss/3-generic folder and imported them as required.

### #4. Navigation & Layout

Steps followed:
1. Created a bundle file for the Accounts Transactions journey
2. Added it to the app-routing.module with its path attributes
3. Added its html inside the app.component.html file
4. Modifyied the code accordingly

### #5. Navigation Submenu
Steps followed:
1. Inside the app.component.html file I added a Pockets link element within the “Transfers” dropdown menu

### #6. Accounts Summary (Adopt)
Steps followed:
1. In the environment.ts file I added mockProviders for the journey
2. I imported the mockProviders into the app.module.ts file's providers array
3. I added the configurations for the journey in its bundle file (bundle-account-transactions-journey.module.ts)

### #7. Transactions (Extend)
Steps followed:
1. I added routes for the journey in its bundle file
2. I imported the routes within the imports array
3. In the childrens array under the 'transactions' path, I replaced data object's 'title' key with 'Transactions'

### #8. Pockets (Build)
Steps followed:
1. Generating an Angular Data Module for the Pockets journey from the pockets-openapi.zip file provided
2. Generated a library, pockets-api
3. Replaced the required files in the libs/pockets-api folder and made the needed modifications
4. Created a bundle file for the Pockets Journey and set up routes along with mockProviders
5. Created the respective views for the Journey, i.e the PocketsList and PocketDetails

### #9. Entitlements (Within Journey)
Steps followed:
1. Imported the Entitlements module within the app.module
2. Set up an interceptor for the Pockets journey
3. Added the permission objects within the interceptor
4. Used the bbIfEntitlements directive on the New Pocket button

### #10. Entitlements (Navigation)
1. Added the permission objects for navigation within the interceptor
2. Used the bbIfEntitlements directive on navigation

