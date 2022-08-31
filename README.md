# One Day Automation

## Installation

`npm install`

## Run

`npx wdio`

## Structure

- **Application**
  - **navBar**
    - getItem(name)
    - hasItem(name)
    - clickOnItem(name)
    - getDropdownItem(name)
    - hasDropdownItem(name)
    - clickOnDropdownItem(name)
    - signInStatus()
    - isSignedIn()
    - getCurrentUser()
  - **signInPage**
    - fillUsername(username)
    - fillPassword(password)
    - clickSignIn()
    - signInWithCredentials(username, password)
  - **anotherPage**
  - **otherPage**
  - **footer**
  - open()
  - getCurrentPageTitle()