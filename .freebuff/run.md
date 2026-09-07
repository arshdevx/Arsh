# Run doc — Arsh Tyagi portfolio (TanStack Start + Vite)

## Reproduce artifacts

- Dependencies: `bun.lock` and `package-lock.json` both exist; the project has
  been run with npm (`node_modules` present). If `node_modules` is missing, run:
  `npm install`
- No env files are required for local dev (no `.env*` in the repo).

## Run the server

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

- Default port: 5173 (`vite dev`). If busy, pass `-- --port <free-port>`.
- Confirm alive: `powershell -NoProfile -Command "Get-Process -Id <pid>"`
- Confirm serving: `curl http://localhost:5173` should return HTTP 200.
- Typecheck: `npx tsc --noEmit` · Build: `npm run build` (outputs to `.vercel/output` via Nitro).
