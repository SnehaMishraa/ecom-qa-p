# Test Cases — SauceDemo

| ID | Module | Scenario / Steps | Test data | Expected result |
|---|---|---|---|---|
| TC001 | Login | Enter valid username and password; click Login | standard_user / secret_sauce | Products page opens |
| TC002 | Login | Enter valid username and invalid password | standard_user / wrong_password | Login is rejected with an error |
| TC003 | Login | Log in with locked account | locked_out_user / secret_sauce | Login is blocked with a clear error |
| TC004 | Login | Leave username blank; enter password; click Login | blank / secret_sauce | Username-required validation appears |
| TC005 | Login | Enter username; leave password blank; click Login | standard_user / blank | Password-required validation appears |
| TC006 | Cart | Log in, add Sauce Labs Backpack, open cart | standard_user / secret_sauce | Cart badge shows 1 and backpack appears |
| TC007 | Sorting | Log in and sort price low to high | standard_user / secret_sauce | Product prices appear in ascending order |
| TC008 | Checkout | Add item, open cart, continue checkout and enter valid information | Test Person / 12345 / Test City | Checkout information step accepts valid fields |
| TC009 | Logout | Log in, open menu, click Logout | standard_user / secret_sauce | Login page appears |

## Execution guidance
Execute each case manually and record Pass, Fail or Blocked in `../test-execution/TEST-EXECUTION.md`. Record actual observations; do not mark a case passed without running it.
