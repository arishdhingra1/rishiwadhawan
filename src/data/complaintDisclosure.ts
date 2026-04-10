/**
 * SEBI-style complaint disclosure (monthly / trend / annual).
 * Update `monthEnding` and row values when filing fresh data.
 */
export const complaintDisclosure = {
  monthEnding: "March 31, 2027",
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
      received: 0,
      resolved: 0,
      totalPending: 0,
      pendingOver3mo: 0,
      avgResolutionDays: 0,
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
    received: 0,
    resolved: 0,
    totalPending: 0,
    pendingOver3mo: 0,
    avgResolutionDays: 0,
  },
  /** Twelve months Apr-26 … Mar-27 (includes Apr-26 per brief). */
  monthlyTrend: [
    { month: "Apr-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "May-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Jun-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Jul-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Aug-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Sep-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Oct-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Nov-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Dec-26", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Jan-27", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Feb-27", carried: 0, received: 0, resolved: 0, pending: "0" },
    { month: "Mar-27", carried: 0, received: 0, resolved: 0, pending: "0" },
  ],
  monthlyTrendGrand: { received: 0, resolved: 0, pending: 0 },
  /** Annual trend starting FY 2025-2026 */
  annualTrend: [
    {
      year: "2025-26",
      carried: 0,
      received: 0,
      resolved: 0,
      pending: "0",
    },
    {
      year: "2026-27",
      carried: 0,
      received: 0,
      resolved: 0,
      pending: "0",
    },
    {
      year: "2027-28",
      carried: 0,
      received: 0,
      resolved: 0,
      pending: "0",
    },
  ],
  annualGrand: { received: 0, resolved: 0, pending: "0" },
} as const;
