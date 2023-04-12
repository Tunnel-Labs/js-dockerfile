# js-dockerfile

`js-dockerfile` is a package for creating Dockerfiles in JavaScript.

## Usage

First, install `js-dockerfile` using your favorite package manager:

```sh
npm install js-dockerfile
```

Then, import it and use it in your project like the following example:

```js
import fs from 'node:fs'
import { createDockerfile } from 'js-dockerfile'

const dockerfile = await createDockerfile(async (d) => {
  const nodeVersion = 16
  d.FROM(`node:${nodeVersion} AS base`)
  d.RUN('apt-get update')
  d.RUN('apt-get install openssl')
  d.FROM('base AS dependencies')
  d.RUN('npm set progress=false && npm config set depth 0')
  d.RUN('npm install --omit=dev')
  d.FROM('base AS release')
  d.COPY('/node_modules', './node_modules', { from: 'dependencies' })
  d.EXPOSE('$PRISMA_STUDIO_PORT')
  d.ENTRYPOINT(["npx", "prisma", "studio"])
})

fs.writeFileSync('Dockerfile', dockerfile)
```
