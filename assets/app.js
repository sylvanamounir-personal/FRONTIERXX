// FrontierX — shared interactions

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
})();

// Readiness assessment logic
(function () {
  const form = document.getElementById('assessForm');
  if (!form) return;

  const dims = [
    { key: 'strategy',   name: 'Business Ambition & Goals' },
    { key: 'people',     name: 'People & Adoption' },
    { key: 'process',    name: 'Process Readiness' },
    { key: 'data',       name: 'Data & Technology' },
    { key: 'governance', name: 'Codified Advantage & Controls' },
    { key: 'security',   name: 'Security & Governance' }
  ];

  const levels = [
    { min: 0,  max: 1.8, label: 'Exploring',  blurb: 'You are at the starting line. AI is ad hoc and not yet anchored to business value. Prioritize setting ambition and a readiness baseline.' },
    { min: 1.8, max: 2.6, label: 'Experimenting', blurb: 'Pockets of activity exist but value is not compounding. Focus on a diffusion engine and persona-based adoption.' },
    { min: 2.6, max: 3.4, label: 'Scaling', blurb: 'You have momentum. Now redesign end-to-end processes and codify your advantage with private evals.' },
    { min: 3.4, max: 4.2, label: 'Operationalizing', blurb: 'AI is embedded in workflows. Build the hill-climbing machine and harden governance to scale safely.' },
    { min: 4.2, max: 5.1, label: 'Frontier', blurb: 'You operate at the frontier. The focus is self-sustaining ownership — your evals, IP and learning loop inside your boundary.' }
  ];

  const recsByDim = {
    strategy:   'Name an executive owner per frontier goal and cascade goals top-down — not use cases bottom-up.',
    people:     'Launch persona-based huddles and make manager role-modeling a measured behavior.',
    process:    'Run "lean before agents": map and de-waste the workflow before deploying agents.',
    data:       'Build a shared source of truth and MCP layer so agents reason over coherent context.',
    governance: 'Codify your "secret sauce" into private evals and a reinforcement learning loop.',
    security:   'Give agents identity, risk-based permissions, and ensure actions are traceable & reversible.'
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const scores = {};
    let total = 0, answered = 0;
    let missing = false;

    dims.forEach(d => {
      const checked = form.querySelector(`input[name="${d.key}"]:checked`);
      if (!checked) { missing = true; return; }
      const v = parseInt(checked.value, 10);
      scores[d.key] = v;
      total += v; answered++;
    });

    if (missing) {
      alert('Please answer all six dimensions to see your readiness score.');
      return;
    }

    const avg = total / answered;
    const pct = Math.round((avg / 5) * 100);
    const level = levels.find(l => avg >= l.min && avg < l.max) || levels[levels.length - 1];

    // weakest two dimensions -> recommendations
    const sorted = dims.slice().sort((a, b) => scores[a.key] - scores[b.key]);
    const weak = sorted.slice(0, 3);

    document.getElementById('scoreValue').textContent = pct + '%';
    document.getElementById('maturityLabel').textContent = level.label;
    document.getElementById('maturityBlurb').textContent = level.blurb;

    const bar = document.getElementById('progressBar');
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = pct + '%'; }, 60);

    const recUl = document.getElementById('recList');
    recUl.innerHTML = '';
    weak.forEach(d => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${d.name} (${scores[d.key]}/5):</strong> ${recsByDim[d.key]}`;
      recUl.appendChild(li);
    });

    // per-dimension breakdown
    const bd = document.getElementById('breakdown');
    if (bd) {
      bd.innerHTML = dims.map(d =>
        `<div style="display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.14);">
           <span>${d.name}</span><strong>${scores[d.key]} / 5</strong>
         </div>`).join('');
    }

    const panel = document.getElementById('resultPanel');
    panel.classList.add('show');
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    form.reset();
    document.getElementById('resultPanel').classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
