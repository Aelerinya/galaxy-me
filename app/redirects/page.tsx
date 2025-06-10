import config from "../../next.config.mjs";

export default async function RedirectsPage() {
  const redirects = await config.redirects?.();
  console.log(config);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Site Redirects</h1>
      {redirects ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-black">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-2 text-left">Source</th>
                <th className="pb-2 text-left">Destination</th>
                <th className="pb-2 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {redirects.map((redirect, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{redirect.source}</td>
                  <td className="py-2">
                    <a
                      href={redirect.destination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {redirect.destination}
                    </a>
                  </td>
                  <td className="py-2">
                    {redirect.permanent ? "Permanent" : "Temporary"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No redirects defined in next.config.mjs</p>
      )}
    </div>
  );
}
