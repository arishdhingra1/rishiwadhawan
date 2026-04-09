import { analyst } from "../data";
import { complaintDisclosure } from "../data/complaintDisclosure";

export function ComplaintDataTables() {
  const d = complaintDisclosure;

  return (
    <div className="complaint-disclosure">
      <header className="complaint-disclosure__header">
        <h2 className="complaint-disclosure__title">
          Complaint data to be displayed by Research Analyst
        </h2>
        <dl className="complaint-disclosure__meta">
          <div>
            <dt>Name of organisation</dt>
            <dd>{analyst.name}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{analyst.title}</dd>
          </div>
          <div>
            <dt>SEBI registration number</dt>
            <dd>{analyst.registrationNo}</dd>
          </div>
          <div>
            <dt>Data for the month ending</dt>
            <dd>{d.monthEnding}</dd>
          </div>
        </dl>
      </header>

      <div className="complaint-disclosure__block">
        <h3 className="complaint-disclosure__h3">Monthly complaint data</h3>
        <div className="complaint-table-scroll">
          <table className="complaint-table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Received from</th>
                <th scope="col">Pending at the end of last month</th>
                <th scope="col">Received</th>
                <th scope="col">Resolved*</th>
                <th scope="col">Total pending#</th>
                <th scope="col">Pending complaints &gt; 3 months</th>
                <th scope="col">Average resolution time^ (days)</th>
              </tr>
            </thead>
            <tbody>
              {d.monthlyRows.map((row) => (
                <tr key={row.sr}>
                  <td>{row.sr}</td>
                  <td>{row.receivedFrom}</td>
                  <td>{row.pendingLastMonth}</td>
                  <td>{row.received}</td>
                  <td>{row.resolved}</td>
                  <td>{row.totalPending}</td>
                  <td>{row.pendingOver3mo}</td>
                  <td>{row.avgResolutionDays}</td>
                </tr>
              ))}
              <tr className="complaint-table__grand">
                <td colSpan={2}>
                  <strong>Grand total</strong>
                </td>
                <td>
                  <strong>{d.monthlyGrand.pendingLastMonth}</strong>
                </td>
                <td>
                  <strong>{d.monthlyGrand.received}</strong>
                </td>
                <td>
                  <strong>{d.monthlyGrand.resolved}</strong>
                </td>
                <td>
                  <strong>{d.monthlyGrand.totalPending}</strong>
                </td>
                <td>
                  <strong>{d.monthlyGrand.pendingOver3mo}</strong>
                </td>
                <td>
                  <strong>{d.monthlyGrand.avgResolutionDays}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="complaint-disclosure__footnote">
          <sup>^</sup> Average resolution time is the sum total of time taken to resolve
          each complaint in days, in the current month divided by total number of
          complaints resolved in the current month.
        </p>
      </div>

      <div className="complaint-disclosure__block">
        <h3 className="complaint-disclosure__h3">
          Trend of monthly disposal of complaints
        </h3>
        <div className="complaint-table-scroll">
          <table className="complaint-table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Month</th>
                <th scope="col">Carried forward from previous month</th>
                <th scope="col">Received</th>
                <th scope="col">Resolved*</th>
                <th scope="col">Pending#</th>
              </tr>
            </thead>
            <tbody>
              {d.monthlyTrend.map((row, i) => (
                <tr key={row.month}>
                  <td>{i + 1}</td>
                  <td>{row.month}</td>
                  <td>{row.carried}</td>
                  <td>{row.received}</td>
                  <td>{row.resolved}</td>
                  <td>{row.pending}</td>
                </tr>
              ))}
              <tr className="complaint-table__grand">
                <td colSpan={3}>
                  <strong>Grand total</strong>
                </td>
                <td>
                  <strong>{d.monthlyTrendGrand.received}</strong>
                </td>
                <td>
                  <strong>{d.monthlyTrendGrand.resolved}</strong>
                </td>
                <td>
                  <strong>{d.monthlyTrendGrand.pending}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="complaint-disclosure__footnote">
          * Inclusive of complaints of previous months resolved in the current month.
        </p>
        <p className="complaint-disclosure__footnote">
          # Inclusive of complaints pending as on the last day of the month.
        </p>
      </div>

      <div className="complaint-disclosure__block">
        <h3 className="complaint-disclosure__h3">
          Trend of annual disposal of complaints
        </h3>
        <div className="complaint-table-scroll">
          <table className="complaint-table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Year</th>
                <th scope="col">Carried forward from previous year</th>
                <th scope="col">Received</th>
                <th scope="col">Resolved*</th>
                <th scope="col">Pending#</th>
              </tr>
            </thead>
            <tbody>
              {d.annualTrend.map((row, i) => (
                <tr key={row.year}>
                  <td>{i + 1}</td>
                  <td>{row.year}</td>
                  <td>{row.carried}</td>
                  <td>{row.received}</td>
                  <td>{row.resolved}</td>
                  <td>{row.pending}</td>
                </tr>
              ))}
              <tr className="complaint-table__grand">
                <td colSpan={3}>
                  <strong>Grand total</strong>
                </td>
                <td>
                  <strong>{d.annualGrand.received}</strong>
                </td>
                <td>
                  <strong>{d.annualGrand.resolved}</strong>
                </td>
                <td>
                  <strong>{d.annualGrand.pending}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="complaint-disclosure__footnote">
          * Inclusive of complaints of previous years resolved in the current year.
        </p>
        <p className="complaint-disclosure__footnote">
          # Inclusive of complaints pending as on the last day of the year.
        </p>
      </div>
    </div>
  );
}
