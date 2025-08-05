interface TableProps {
  titles: string[];
  data: Array<Record<string, string>>; 
}

export default function Table({ titles, data }: TableProps) {
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
        {data.map((row, idx) => (
          <tr key={idx} className="border-b border-gray-200">
            {titles.map((title) => (
              <td key={title} className="px-6 py-4 text-gray-600">
                {isValidUrl(row[title]) ? (
                  <a
                    href={row[title]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {row[title]}
                  </a>
                ) : (
                  row[title]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function isValidUrl(str: string) {
  return str.startsWith("http://") || str.startsWith("https://") || str.startsWith("www.");
}
