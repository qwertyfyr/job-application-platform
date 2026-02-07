"use server";
import { getListings } from "server/src/services/listing.service";

export async function Page() {
  const listings = await getListings();

  const listingCountByCompany: Record<string, number> = {};
  listings.forEach((listing) => {
    const companyName = listing.company.name;
    if (listingCountByCompany[companyName]) {
      listingCountByCompany[companyName]++;
    } else {
      listingCountByCompany[companyName] = 1;
    }
  });

  return (
    <main className="m-8">
      <h1>Dashboard:</h1>
      <div className="">
        <h2>Listings:</h2>
        <section className="w-2/3 mt-2">
          <div className="flex flex-col w-fit gap-2 border border-black p-4 rounded-md">
            {listings ? (
              listings.map((listing) => (
                <p>
                  {listing.company.name} - {listing.title}
                </p>
              ))
            ) : (
              <p>No listings found.</p>
            )}
          </div>
        </section>
        <aside>
          <h2>Times applied per company:</h2>
          <div className="flex flex-col w-fit gap-2 border border-black p-4 rounded-md">
            {listingCountByCompany &&
              Object.entries(listingCountByCompany)
                .sort(([name, count]) => count)
                .map(([companyId, count]) => (
                  <p key={companyId} className="flex justify-between gap-3">
                    <span className="font-semibold">{companyId}:</span>
                    <span className="self-end">{count}</span>
                  </p>
                ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
