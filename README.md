This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## NextJS, DrizzleORM, ShadcnUI, React Email user management application.

This is an example user management application showing the use case of generating secure invitations, registering users

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```bash
pnpm email
```

Open [http://localhost:4000](http://localhost:4000) with your browser to the email preview.

```bash
pnpm db:studio
```

Open [https://local.drizzle.studio/](https://local.drizzle.studio/) with your browser to connect to your Postgres database and edit your data.

### Environment variables 
create a .env file and add the secrets needs for, including 

- Prostgreq connection string, 
- Resend API key 
- Random secret password to sign 
```env
DB_URL=
RESEND_API_KEY=
JWT_SECRET=
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

