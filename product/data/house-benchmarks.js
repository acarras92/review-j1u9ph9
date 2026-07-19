/* PIPBench — HOUSE (in-house) benchmark assumptions.
   =====================================================================
   This is where your team's own budget assumptions live. They come from
   interviews with your C&D / development team and/or past deal budgets.
   When a house assumption exists for a (category, tier), PIPBench uses it
   as the benchmark the bid is measured against — badged IN-HOUSE — and
   still shows the public range underneath as a reference.

   HOW TO ADD ONE — copy an entry into `assumptions` and edit:
     {
       category: 'guestroom-softgoods',  // one of: guestroom-softgoods,
                                          //   guest-bathrooms, corridors,
                                          //   lobby-public, exterior, ptac,
                                          //   key-system, elevator, ada
       tier: 'luxury',       // a tier, or 'all' to apply at every tier
       low: 40000, high: 55000,          // your expected range
       unit: 'per key',      // 'per key' or 'total'
       basis: 2026,          // year the figure is in; older years get
                             //   escalated to today's $ at the chosen rate
       source: '3 recent luxury DC conversions',
       note: 'Team assumption — replace with your own figure',
     }

   `globalNotes` is free text shown on the benchmark screen and in the memo —
   use it for team-wide assumptions (GC OH&P %, regional premium, sourcing
   posture, etc.) that don't attach to a single category.
   ===================================================================== */
window.HOUSE_DATA = {
  globalNotes: '',
  assumptions: [
    // EXAMPLE (remove or replace after your team interview). Shows the
    // IN-HOUSE override in action when the tier is set to Luxury.
    {
      category: 'guestroom-softgoods',
      tier: 'luxury',
      low: 40000, high: 55000,
      unit: 'per key',
      basis: 2026,
      source: 'EXAMPLE — team assumption',
      note: 'EXAMPLE — replace with your team’s figure (recent luxury/extended-stay softgoods + FF&E per key)',
    },
  ],
};
