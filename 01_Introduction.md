
##  Testing
- Speeds up development
- Quickly Identify Issues, Breaking changes

Testing here means, writing automated test (code that runs your code) and defining exceptions
that these tests should meet.

## Types
- **Unit Tests**, Isolated unit of code (eg. function ) is tested.
- **Integration Tests,** Test combination of features
- **End-to-End (e2e) / UI tests**, Test of full interaction path (flow)

![[Pasted image 20231106160927.png]]


# Unit Tests
- Easiest tests to write, as no dependencies or complex interactions to deal.
- It is to ensure correctness of code.
**Example**
**![[Pasted image 20231106161053.png]]**

One Unit test for the above code :
![[Pasted image 20231106161106.png]]

**Note:**  Split your app into a lot of small modules which can be tested individually.

# Tools
- Test code is not part of the app code.
- Tests are executed during development, and not shipped with the app.
- We need 3 kinds of tools :
	1. **Test Runner**
	2.  **Assertion Library**
	3. **E2E Testing Tool**

## Test Runners
- It executes tests and summarizes the results.
- Example: **Mocha, Jest, Karma**
- Installing Jest : npm install jest

## Assertion Library
- We need Assertion library to define the expectations.
- Example: Chai, Jest, Jasmin


## Karma
- Karma is a JS test runner.
- Jasmin is also a test runner.
- Karma provides tools that make calling Jasmin test with angular easy.

# Unit Test
- Angular testing package includes two utilities 
	- TestBed
	- async TestBed

![[Pasted image 20231106173513.png]]

- *describe*
	- contains different blocks such as
		- it
		- beforeEach
		- xit
	- beforeEach block run before all the other blocks.
	- Declaration of app.module.ts is simulated in beforeEach.
	- app.component.ts (the main component) is also declared in beforeEach.

![[Pasted image 20231106173838.png]]
- compileComponents not required with webpack.

- **it**
	- Contains individual testcases
	- example checking if right component is loaded.
	![[Pasted image 20231106174021.png]]

	- we can access the inner properties as well

![[Pasted image 20231106174108.png]]
