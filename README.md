# Bootcamp: Steps I Followed

### #2: Generate Theme
Within the peachtree-bank/src/app/themes directory, I adjusted the colours for the following in their respective folders:

1. Primary: #27AD60
2. Secondary: #30292F
3. Info: #5D737E
4. Background Color: #F8FBF4
5. Warning: #FA9975

### #3. Add a unique font family
1. Downloaded the `Mukta` font and added it to the peachtree-bank/src/app/themes/peachtree-bank/assets/fonts directory: 
2. Created the font's font-faces within the peachtree-bank/src/app/themes/peachtree-bank/scss/3-generic folder and imported them as required.

### #4. Navigation & Layout
1. Created a bundle file for the Accounts Transactions journey
2. Added it to the app-routing.module with its path attributes
3. Added its html inside the app.component.html file
4. Modified the code accordingly

### #5. Navigation Submenu
1. Inside the app.component.html file I added a Pockets <li> element within the “Transfers” dropdown menu

### #6. Accounts Summary (Adopt)
1. In the environment.ts file I added mockProviders for the journey
2. Imported the mockProviders into the app.module.ts file's providers array
3. Added configurations for the journey in its bundle file (bundle-account-transactions-journey.module.ts)

### #7. Transactions (Extend)
1. I added routes for the journey in its bundle file
2. Imported the routes within the imports array
3. In the childrens array under the 'transactions' path, I replaced data object's 'title' key with 'Transactions'

### #8. Pockets (Build)
1. Generated an Angular Data Module for the Pockets journey from the pockets-openapi.zip file provided
2. Generated a library, pockets-api
3. Replaced the required files in the libs/pockets-api folder and made the needed modifications
4. Created a bundle file for the Pockets Journey and set up routes along with mockProviders
5. Created the respective views for the Journey, i.e the Pockets, PocketsList, PocketDetails and PocketSvg

### #9. Entitlements (Within Journey)
1. Imported the Entitlements module within the app.module
2. Set up an interceptor for the Pockets journey
3. Added the permission objects within the interceptor
4. Used the bbIfEntitlements directive on the New Pocket button to conditionally render the button

### #10. Entitlements (Navigation)
1. Added the permission objects for navigation within the interceptor
2. Used the bbIfEntitlements directive on navigation

