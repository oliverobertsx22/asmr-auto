services:
  - type: web
    name: asmr-auto
    runtime: node
    rootDir: .
    buildCommand: npm run install-all && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: ELEVENLABS_API_KEY
        sync: false
      - key: KLING_ACCESS_KEY
        sync: false
      - key: KLING_SECRET_KEY
        sync: false
      - key: SUPABASE_URL
        sync: false
      - key: SUPABASE_ANON_KEY
        sync: false
