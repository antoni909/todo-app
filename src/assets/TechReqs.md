# Development Process, Milestones

## Phase-1

To Do List Manager Phase 1: Incorporate configuration settings to the application

In this phase, we’ll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Create a new GitHub Repository named todo-app
Clone this to your machine
Copy the contents of the starter-code folder from the class repository for today
Create and work in a new branch for today called ‘context-settings’

Business Requirements
Refer to the To Do System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 1 Requirements
In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

Style the application using the Blueprint Component API{target:_blank}

Properly modularize the application into separate components

Implement the Context API to make some basic application settings available to components

How many To Do Items to show at once
Whether or not to show completed items
To Do with Pagination

Technical Requirements / Notes
Create a settings Context that can define how our components should display elements to the User.

Implement the React context API for defining settings across the entire application.
Create a context for managing application display settings and provide this at the application level.
Display or Hide completed items (boolean).
Number of items to display per screen (number).
Default sort field (string).
Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.
Consume and utilize context values throughout your components
Show a maximum of a certain number of items per screen in the <List /> component
Provide “next” and “previous” links to let the users navigate a long list of items
Hide or show completed items in the list
Optional: Sort the items based on any of the keys (i.e. difficulty)
Pagination Notes:

Only display the first n items in the list, where n is the number to display per screen in your context.
If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.
Stretch Goals
Convert all components from classes to functions
In your Context, read the settings in from an object in Local Storage and use that as the initial state
Testing
Tests should assert all behavioral functionality
Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
Can they see context?
Documentation
Describe how global state is consumed by the components
Describe the operation of the hook: useForm()
Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

## Phase-2

LAB: Context API - Behaviors
To Do List Manager Phase 2: Incorporate configuration settings to the application

In this phase, we’ll be adding an editor so that users can save their preferences for the application, allowing them to change some of the default behaviors

Before you begin
Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Continue to work in your GitHub Repository named todo-app
Create and work in a new branch for today called ‘context-methods’
Business Requirements
Refer to the To Do System Overview for a complete review of the application, including Business and Technical requirements along with the development roadmap.

Phase 2 Requirements
In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

Implement the Context API to make some basic application settings available to components
How many To Do Items to show at once
Whether or not to show completed items
Provide the users with a form where they can change the values for those settings
This should be given in the form of a new component, perhaps linked to from the main navigation
Hint: Use Browser Router to create the page/route/component for this
Save the users choices in Local Storage
Retrieve their preferences from Local Storage and apply them to the application on startup
To Do with Pagination

Technical Requirements / Notes
Technical requirements for the core application are unchanged from the prior phases, with the addition of context behaviors defined in our global Context Provider

Extend your context provider to include all of the following features:
Create a context for managing application settings and provide this at the application level.
Display or Hide completed items (boolean).
Number of items to display per screen (number).
Default sort field (string).
Create a function in your context that saves user preferences (for the above) to local storage.
Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.
Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.

Consume and utilize Context values throughout your components:
Show a maximum of a certain number of items per screen in the <List /> component.
Provide “next” and “previous” links to let the users navigate a long list of items.
Hide or show completed items in the list.
Optional: Sort the items based on any of the keys (i.e. difficulty).
Pagination Notes:

Only display the first n items in the list, where n is the number to display per screen in your context.
If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.
Stretch Goal:
Update the state handling for todo items to use useReducer() vs separate state management methods

Testing
Tests should assert all behavioral functionality
Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
Can they see context?
Assignment Submission Instructions
Refer to the the Submitting React Apps Lab Submission Instructions for the complete lab submission process and expectations

## Phase-3

## Phase-4
