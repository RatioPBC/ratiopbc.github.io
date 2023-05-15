export function Clients()

{
    return ( 
        <div className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-dark-gray">Clients we've served</h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://profiles.health.ny.gov/img/nysdoh.png" alt="NYSDOH" width="158" height="48"></img>
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://www.nj.gov/health/assets/img/seal.png" alt="NJDOH" width="158" height="48"></img>
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://www.openresearchlab.org/img/OR-Logo.svg" alt="OpenResearch" width="158" height="48"></img>
            <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://uploads-ssl.webflow.com/6189cac40e920a6378d7efe0/6189ee804c8ddaeb5ecb59ea_Group%2071-p-500.png" alt="Yuvo" width="158" height="48"></img>
            </div>
        </div>
        </div>

    )
}
