import {prisma} from '../lib/prisma';


// GET
export function getListings() {
    return prisma.listing.findMany({include:{company: true},orderBy: {createdAt: 'desc'}});
}
export function getListingById(id: number) {
    return prisma.listing.findUnique({where: {id}});
}
export function getListingsByCompany(companyId: string) {
    return prisma.listing.findMany({where: {companyId}, orderBy: {createdAt: 'desc'}});
}

// POST
export function createListing(data: {company: string, title: string, position: string, remote? :boolean, location: string, link?:string}){
    // validation
    return prisma.listing.create({
        data: {
            title: data.title,
            position: data.position,
            remote: data.remote ?? null,
            location: data.location,
            link: data.link ?? null,
            company: {
                connectOrCreate: {
                    where: {id: data.company},
                    create: {id: data.company.trim().toLowerCase(), name: data.company}
                }
            }
        }
    });
}

// PUT
export function updateListing(data: {id: number, companyId?: string, title?: string, position?: string, remote? :boolean, location?: string, link?:string, jobOffer?: boolean}){
    // validation
    const {link, location, position, remote, title, jobOffer } = data;
    return prisma.listing.update({
        where: {id: data.id},
        data: {
            ...(title !== undefined && {title}),
            ...(link !== undefined && {link}),
            ...(location !== undefined && {location}),
            ...(position !== undefined && {position}),
            ...(remote !== undefined && {remote}),
            ...(jobOffer !== undefined && {jobOffer}),
        }
    });
}