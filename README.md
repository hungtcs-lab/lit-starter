# Lit Starter

Well-prepared out-of-the-box lit starter.

## Structure

```txt
.
├── lib                         # the main folder
│  ├── hello.element.spec.ts    # the element test
│  ├── hello.element.ts         # the element
│  ├── index.ts                 # library entry
│  └── some.element.ts
├── package-lock.json
├── package.json
├── README.md
├── src                         # test or demo the custom elements
│  └── index.html
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.lib.json
├── web-dev-server.config.js    # web dev server config file
└── web-test-runner.config.js   # web test runner config file
```

## Commands

- Start project in dev mode

    ```shell
    npm run start:Dev
    ```

- Run tests

    ```shell
    npm test
    ```

- Build

    ```shell
    npm run build
    ```
