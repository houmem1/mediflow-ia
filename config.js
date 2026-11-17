// Adresse de l'API MediFlow (Cloudflare Worker + D1). Seul endroit à modifier
// après le déploiement : remplacer par l'URL affichée par `npx wrangler deploy`.
window.MEDIFLOW_API = 'https://mediflow-api.REMPLACER.workers.dev';

// Formulaire de contact : workflow n8n « MediFlow — Leads landing » (Data table mediflow_leads).
window.MEDIFLOW_LEADS_URL = 'https://slhoumem.app.n8n.cloud/webhook/mediflow-lead';

// Tests en local uniquement : ?api=http://127.0.0.1:8787 (ignoré en production,
// pour qu'un lien piégé ne puisse pas détourner la clé du dashboard).
(function () {
  var h = window.location.hostname;
  if (h === 'localhost' || h === '127.0.0.1') {
    var o = new URL(window.location).searchParams.get('api');
    if (o) window.MEDIFLOW_API = o.replace(/\/$/, '');
  }
})();
