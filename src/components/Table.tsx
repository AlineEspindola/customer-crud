import Person from "@/core/Person";

export default function Table({ titles, data }: { titles: string[]; data: Person[] }) {
  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead className="bg-[#F9F9FB]">
        <tr>
          {titles.map((title) => (
            <th
              key={title}
              className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((person, idx) => (
          <tr key={idx} className="border-b border-gray-200">
            <td className="px-6 py-4 text-gray-800 ">{person.personName}</td>
            <td className="px-6 py-4 text-gray-600">{person.personCompany}</td>
            <td className="px-6 py-4 text-blue-600 underline">
              <a href={person.personProfile} target="_blank" rel="noreferrer">
                {person.personProfile}
              </a>
            </td>
            <td className="px-6 py-4 text-gray-600">{person.personLastContact.toLocaleDateString()}</td>
            <td className="px-6 py-4 text-gray-600">{person.personWhatToSay}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
