import {prisma} from '../lib/prisma';

export function getListings() {
    return prisma.listing.findMany({orderBy: {createdAt: 'desc'}});
}

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