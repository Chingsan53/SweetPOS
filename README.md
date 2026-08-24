# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# SweetPOS

## Plans

#### Cashier POS

##### Order Type

- Dine-in
- Takeout
- Pickup

##### Product Categories

- Donuts
- Drinks
- Sandwiches
- Combos

##### Product Grid

-

##### Current Order

- 2x Glazed Donut
- 1x Coffee
- 1x Sandwich

##### Payment

- Cash
- Card
- Other

#### Kitchen Display System (KDS)

##### Kitchen Display

##### ORDER #1024

2 min ago

1 Glazed\
1 Chocolate\
1 Coffee\

[START]

##### ORDER #1023

5 min ago

1 Ham Egg\
2 Coffee\

[READY]

##### ORDER #1022

8 min ago

3 Glazed\
1 Latte\

[READY]

#### Customer Frontend

##### Customer Ordering

Menu

- Donuts
- Drinks
- Food

Customize Item

Cart

Customer Information

Checkout

### Devices

#### Customer Frontend

- QR-code ordering
- Online ordering website
- Self-service kiosk
- Customer tablet

#### Kitchen

- Tablet showing order detail and note
- Flow: New -> Preparing -> Ready -> Completed

##### In this React POS, there are 3 applications/interfaces sharing the same backend.

### Key Design:

- Cashier = transaction-focused
- Kitchen = production-focused
- Customer = ordering-focused
- Admin = management-focused
