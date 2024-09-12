import React from "react"

const PrismaCommands = () => {
  return (
    <div id="prisma-commands">
      <h2 className="heading">Prisma CLI Commands</h2>
      <div className="command-block">
        <h3>npx prisma init</h3>
        <p>
          Initializes a new Prisma project by creating a `prisma` directory with the necessary files,
          including `schema.prisma`. This is the first command you'll run when starting with Prisma.
        </p>
      </div>
      <div className="command-block">
        <h3>npx prisma generate</h3>
        <p>
          Generates the Prisma Client based on the `schema.prisma` file. This command should be run every
          time you make changes to your schema.
        </p>
      </div>
      <div className="command-block">
        <h3>npx prisma migrate dev</h3>
        <p>
          Applies migrations to your database and updates the Prisma Client. This command is used during
          development to synchronize your database schema with your Prisma schema.
        </p>
      </div>
      <div className="command-block">
        <h3>npx prisma migrate deploy</h3>
        <p>
          Applies all pending migrations in a production environment. Use this command when deploying
          your application.
        </p>
      </div>
      <div className="command-block">
        <h3>npx prisma studio</h3>
        <p>
          Opens Prisma Studio, a GUI for viewing and editing the data in your database. It's a convenient
          way to interact with your data during development.
        </p>
      </div>
      <div className="command-block">
        <h3>npx prisma db push</h3>
        <p>
          Pushes your Prisma schema state to your database without generating a migration. This command
          is useful for prototyping when you don't want to manage migrations.
        </p>
      </div>
    </div>
  )
}

export default PrismaCommands
