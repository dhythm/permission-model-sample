# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Setting up

### Create app

```sh
npm create t3-app@latest
   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|


? What will your project be called? permission-model-sample
? Will you be using TypeScript or JavaScript? TypeScript
? Which packages would you like to enable? prisma, trpc
? Initialize a new git repository? Yes
? Would you like us to run 'npm install'? Yes
? What import alias would you like configured? @
```

### Install dependencies

```sh
npm install --save-dev prettier eslint-config-prettier
echo {}> .prettierrc.json

# add "prettier" into extends clause of .eslintrc.cjs
```

### Create database

```sh
touch docker-compose.yml
touch prisma/seed.mjs

# update provider in schema.prisma to "postgres" and update schema.
# update DATABASE_URL in .env
```

```sh
npm run db:init

docker exec -it $(docker ps -q -f 'NAME=permission-model-sample') psql -U postgres -c "SELECT * FROM \"Ability\""
```

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
