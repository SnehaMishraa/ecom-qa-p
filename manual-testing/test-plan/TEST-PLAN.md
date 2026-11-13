# Test Plan — SauceDemo E-Commerce Application

## 1. Objective
Verify the core shopping workflow, including authentication, product browsing, sorting, cart operations and checkout.

## 2. Scope
In scope: Login, invalid login, product listing, sorting, add-to-cart, cart review and checkout workflow.

**Out of scope:** Real payment processing, production security assessment, load testing and testing of private systems.

## 3. Test approach
- Manual functional testing using documented test cases.
- Positive and negative testing.
- Browser automation using Playwright.
- Capture evidence for reproducible failures.

## 4. Test environment
- OS: Windows (record exact version during execution)
- Browser: Chromium via Playwright; manual browser: record actual browser/version
- Application: https://www.saucedemo.com/
- Automation: Node.js and Playwright Test

## 5. Entry criteria
- Demo application is reachable.
- Test data is available.
- Dependencies and browser are installed for automation.

## 6. Exit criteria
- Planned cases have an execution status.
- Failures have actual results and evidence.
- Known limitations are documented.

## 7. Deliverables
Test plan, test cases, execution record, defect reports, automation scripts and HTML report.

## 8. Risks
The application is a public demo; availability, network conditions or application changes may affect results.
