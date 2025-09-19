# ClaimIt

Quick start (Windows PowerShell):

```powershell
cd C:\Users\divya\OneDrive\Desktop\ClaimIt
npm install
npm run dev
```

App pages:

- Login
- Dashboard
- Claims list
- Submit claim
- Claim details

The app uses a simple mock API backed by localStorage at `src/api/mockApi.js`.

Notes:

- Authentication is mocked using localStorage `claimit_user`.
- Data persists in localStorage under `claimit_claims_v1`.

Next steps you might want:

- Integrate real backend API endpoints.
- Add tests and form validation.
