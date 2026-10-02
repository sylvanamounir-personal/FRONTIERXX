# FrontierX — AI Transformation Orchestrator (Concept Site)

A multi-page, static website for **FrontierX**, an **AI transformation orchestrator**. FrontierX owns the transformation strategy, business rewiring and orchestration, while an ecosystem of **AI technology and system-integration partners** implements and industrializes the AI solutions.

- **Vision:** shape a new generation of enterprises where human ingenuity and AI intelligence work together.
- **Mission:** move organizations from AI ambition to measurable business outcomes.
- **Our role:** Envision → Prioritize → Rewire → Orchestrate → Scale → Measure.
- **Belief:** Build the next enterprise.
- **Promise:** Build the next enterprise.

The framework, terminology, color palette and benchmarks are adapted from Microsoft's **"Becoming a Frontier Firm"** Playbook and an **Agentic Business Process Rewiring Framework**, used here as an illustrative concept. *Not affiliated with or endorsed by Microsoft.*

## The five services

| # | Service | Frontier recipe / element |
|---|---------|---------------------------|
| 1 | **Onboarding & Adoption** — Copilot for Business, role by role | Persona Acceleration |
| 2 | **Agentic Process Rewiring** — rewire outcomes per domain on MCP | AI-Powered Process Redesign |
| 3 | **AI Readiness Assessment** — six-dimension interactive scorecard | Set Ambition & Goals |
| 4 | **Building the AI Factory** — diffusion engine & hill-climbing machine | Build Your Diffusion Engine |
| 5 | **Ownership Transfer** — hand the keys to the client | Codify Advantage & Safeguard Security |

## Files

```
ai-consultancy/
├── index.html                 Landing page (hero, services, journey, method)
├── assessment.html            Interactive AI readiness scorecard (service 3)
├── service-onboarding.html    Service 1
├── service-process.html       Service 2 (Agentic Rewiring Framework — 5 steps)
├── service-factory.html       Service 4
├── service-ownership.html     Service 5
├── assets/
│   ├── styles.css             Shared design system (Frontier palette)
│   ├── logo.svg               Brand logo mark (ascending frontier nodes)
│   └── app.js                 Scroll reveal + assessment scoring logic
└── README.md
```

## Run it

Open `index.html` directly in a browser, or serve the folder:

```bash
cd "ai-consultancy"
python3 -m http.server 8000
# then visit http://localhost:8000
```

## GitHub Pages deployment

This project is ready for GitHub Pages. To publish it publicly:

1. Push the `ai-consultancy/` folder to a GitHub repository.
2. In GitHub, open the repository and go to Settings → Pages.
3. Set the source to `Deploy from a branch`.
4. Choose the `main` branch and the `/root` folder.
5. Save the settings.
6. GitHub will issue a public URL in the form:
   `https://<username>.github.io/<repository-name>/`

The site includes `index.html` and `.nojekyll` so the landing page works correctly on GitHub Pages.

## The assessment

`assessment.html` scores six dimensions (strategy, people, process, data, governance, security) on a 1–5 scale, computes a readiness percentage and maturity level (Exploring → Experimenting → Scaling → Operationalizing → Frontier), and returns the three weakest dimensions as prioritized recommendations. All logic runs client-side in `assets/app.js`.
