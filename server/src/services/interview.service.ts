import { prisma } from "../lib/prisma";


export function getInterviews() {
    return prisma.interview.findMany({orderBy: {id: "desc"}});
}

export function createInterview(data: {listingId: number, date: Date}) {
    return prisma.interview.create({
        data: {
            listing: {
                connect: {
                    id: data.listingId
                }
            },
            date: data.date
        }
    })
}