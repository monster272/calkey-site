// Generated from gradle.properties — the same publishable key the APK ships.
// It can only read waitlist_stats; joining goes through the waitlist-join
// function, which confirms the email (20261023120000_waitlist_confirm.sql).
window.CALKEY = {
  supabaseUrl: "https://rwqdcsklzbffqbffhfuj.supabase.co",
  publishableKey: "sb_publishable_ls7exjGRsDf7UJ_Q7aJjGw_ht-gHid8",
  // Votes that fill the iPhone battery to 100%. Visual only, not a promise.
  iosGoal: 1000,
  // Below these REAL counts the page shows words instead of a small number.
  // Never seed or inflate them: every number on the page is a live count.
  showCountsFrom: 25,
  showIosFrom: 10,
  // Google Ads conversion (30 Oct 2026): fired on confirm.html once a waitlist
  // sign-up is confirmed, so ads are judged on confirmed sign-ups and nothing
  // else. Null until the ads agent creates the action (marketing/ads-log.md);
  // null loads nothing. Only confirm.html uses it; no other page loads gtag.
  adsConversion: null // e.g. { id: "AW-123456789", label: "AbCdEfGhIj" }
};
