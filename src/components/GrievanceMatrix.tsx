import { analyst } from "../data";

const designations = [
  "Principal Officer",
  "CEO",
  "Compliance officer / Grievance Officer",
  "Head of Customer",
  "Customer Care",
] as const;

export function GrievanceMatrix() {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <caption className="legal-table__caption">
          Grievance redressal — contact details by role
        </caption>
        <thead>
          <tr>
            <th scope="col">Details of designation</th>
            <th scope="col">Contact person name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact number</th>
            <th scope="col">Email ID</th>
            <th scope="col">Working hours (complainant may call)</th>
          </tr>
        </thead>
        <tbody>
          {designations.map((role) => (
            <tr key={role}>
              <td>{role}</td>
              <td>{analyst.contactPerson}</td>
              <td>{analyst.address}</td>
              <td>
                <a href={`tel:${analyst.phoneTel}`}>{analyst.phone}</a>
              </td>
              <td>
                <a href={`mailto:${analyst.email}`}>{analyst.email}</a>
              </td>
              <td>{analyst.workingHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
