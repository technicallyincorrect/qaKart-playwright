# qaKart-playwright
Automated a online shopping website using playwright and typescript

Structure of the code
--
For test cases: All the tests are present in the tests folder -> e2e -> 'file.spec.ts'

For Pages: All the functions are segregated based on pages on which they are to be used, then called on in the 'spec.ts' files.

utils: Used a function outside the class to create a random username and password for registration page. -> this function is present in the utils.ts file in utils folder

config: Credentials: created a config.ts file in the utils folder to store the credentials and utilise them for login and order placement test cases. Utilised a TOML file which is present in config.toml

--
##
Steps to run the code:
1. Pull the code and make sure playwright is running
2. In the terminal, run using npx playwright test command

--
## 
Please don't make any unneccesary commits to the git repository