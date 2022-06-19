# Unit testing the UI Components using React Testing Library - Training session: Day 1, Introduction 

This is the initial state of the application before getting started.

The different stages of setup and implementations of unit tests are pushed to different branches as named below:

* Add dependencies
    * `session-start` or `master`
* configure test utilities
    * `setup-complete`
* Add simple component and associated test file
    * `simple-component`
* Add input/form elements/events and assocaited test file
    * `form-elements`
* Add api calls and assocaited test file
    * `api-calls`

### To run tests 

* using default CRA/react-scripts
    `npm run test`
* using jest and custom config
    `npm run test:ci`
* using jest and test a single file
    `npx jest <path/to/the/target/file>` (add parameters after adding `--` for e.g. `npx jest <path/to/the/target/file> -- -u` it will run test and update the snapshot)
