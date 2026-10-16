/* Agent API base for the hosted chat page.
 *
 * After deploying the Edge Function, replace YOUR_PROJECT_REF below with
 * your Supabase project ref, e.g.:
 *   window.AGENT_API = "https://abcdefghijklmnopqrst.supabase.co/functions/v1";
 *
 * The three chat calls become:
 *   {base}/agent/status, {base}/agent, {base}/agent/confirm
 */
window.AGENT_API = "https://cgbtthjtnznedyxwtmuo.supabase.co/functions/v1";

/* Sign-in for the chat page: the SAME Supabase project and the SAME
 * account as the Expense Tracker app (see expense-tracker/config.js).
 * The publishable key is safe to ship in a page — the app already does.
 * Replace YOUR_PROJECT_REF above AND below with your project ref. */
window.SUPABASE_URL = "https://cgbtthjtnznedyxwtmuo.supabase.co";
window.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Oyf_FJz-UyfpH6maO-nDhg_d4-wAaRv";
