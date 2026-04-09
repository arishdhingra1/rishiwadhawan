/**
 * SEBI-style complaint disclosure (monthly / trend / annual).
 * Update `monthEnding` and row values when filing fresh data; sample figures
 * retained from reference template until live numbers are available.
 */
export const complaintDisclosure = {
  monthEnding: "Jan 31, 2026",
  monthlyRows: [
    {
      sr: 1,
      receivedFrom: "Directly from Investors",
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      totalPending: 0,
      pendingOver3mo: 0,
      avgResolutionDays: 0,
    },
    {
      sr: 2,
      receivedFrom: "SEBI (SCORES)",
      pendingLastMonth: 0,
      received: 19,
      resolved: 19,
      totalPending: 0,
      pendingOver3mo: 0,
      avgResolutionDays: 22,
    },
    {
      sr: 3,
      receivedFrom: "Other Sources (if any)",
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      totalPending: 0,
      pendingOver3mo: 0,
      avgResolutionDays: 0,
    },
  ],
  monthlyGrand: {
    pendingLastMonth: 0,
    received: 19,
    resolved: 19,
    totalPending: 0,
    pendingOver3mo: 0,
    avgResolutionDays: 0,
  },
  monthlyTrend: [
    { month: "Feb-25", carried: 0, received: 1, resolved: 0, pending: "1.00" },
    { month: "Mar-25", carried: 1, received: 0, resolved: 1, pending: "—" },
    { month: "Apr-25", carried: 0, received: 0, resolved: 0, pending: "—" },
    { month: "May-25", carried: 0, received: 0, resolved: 0, pending: "—" },
    { month: "Jun-25", carried: 0, received: 0, resolved: 0, pending: "—" },
    { month: "Jul-25", carried: 0, received: 0, resolved: 0, pending: "—" },
    { month: "Aug-25", carried: 0, received: 4, resolved: 0, pending: "4.00" },
    { month: "Sep-25", carried: 4, received: 2, resolved: 6, pending: "—" },
    { month: "Oct-25", carried: 0, received: 1, resolved: 0, pending: "1.00" },
    { month: "Nov-25", carried: 1, received: 0, resolved: 1, pending: "—" },
    { month: "Dec-25", carried: 0, received: 0, resolved: 0, pending: "—" },
    { month: "Jan-26", carried: 0, received: 0, resolved: 0, pending: "—" },
  ],
  monthlyTrendGrand: { received: 8, resolved: 8, pending: 0 },
  annualTrend: [
    {
      year: "2023-24",
      carried: 0,
      received: 0,
      resolved: 0,
      pending: "—",
    },
    {
      year: "2024-25",
      carried: 0,
      received: 12,
      resolved: 12,
      pending: "—",
    },
    {
      year: "2025-26",
      carried: 0,
      received: 7,
      resolved: 7,
      pending: "—",
    },
  ],
  annualGrand: { received: 19, resolved: 19, pending: "—" },
} as const;
