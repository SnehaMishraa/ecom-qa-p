# E-Commerce QA Automation Portfolio

A beginner-friendly QA portfolio project that combines manual test documentation with browser automation using JavaScript and Playwright.

## Application under test
- Name: SauceDemo
- URL: https://www.saucedemo.com/
- This is a public demo application. Use only its published demo credentials.

## Tech stack
- JavaScript (Node.js)
- Playwright Test
- Chromium browser
- Markdown test documentation
- Git / GitHub

## Project structure
```text
ecommerce-qa-portfolio/
├── manual-testing/
│   ├── test-plan/TEST-PLAN.md
│   ├── test-cases/TEST-CASES.md
│   ├── test-execution/TEST-EXECUTION.md
│   └── bug-reports/BUG-REPORT-TEMPLATE.md
├── automation-testing/
│   ├── pages/
│   │   ├── LoginPage.js
│   │   └── InventoryPage.js
│   ├── tests/
│   │   ├── login.spec.js
│   │   └── shopping-cart.spec.js
│   └── playwright.config.js
├── screenshots/
├── .gitignore
└── package.json
```

## Prerequisites
1. Install Node.js LTS: https://nodejs.org/
2. Install VS Code: https://code.visualstudio.com/
3. Open this folder in VS Code.

## Install and run
Open the VS Code terminal in this project folder and run:

```bash
npm install
npx playwright install
npm test
```

Run tests with the browser visible:
```bash
npm run test:headed
```

Open the HTML report after a run:
```bash
npm run report
```

Run only login tests:
```bash
npx playwright test --config=automation-testing/playwright.config.js automation-testing/tests/login.spec.js
```

## Demo credentials
- Standard user: `standard_user`
- Password: `secret_sauce`
- Locked user: `locked_out_user`

These are public SauceDemo demo credentials, not personal credentials.

## Manual testing
Start with `manual-testing/test-plan/TEST-PLAN.md`. Execute the cases in `manual-testing/test-cases/TEST-CASES.md` in the browser and record actual outcomes in `manual-testing/test-execution/TEST-EXECUTION.md`.

Do not invent defects. A defect report should include reproducible steps, expected result, actual result, environment, and evidence.

## Notes
- Tests use the live public demo site, so results can be affected by network availability or changes to the demo application.
- The automated suite is a learning/portfolio example, not a claim of production certification.
- Update the author section and add your own screenshots and execution evidence before publishing.
