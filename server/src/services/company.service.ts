import {prisma} from '../lib/prisma';

// GET

export function getCompanies() {
    return prisma.company.findMany({orderBy: {name: 'asc'}});
}

export function getCompaniesById(id: string) {
    return prisma.company.findUnique({where: {id}});
}

export function createCompany(data: {id: string, name: string}) {
    // validation
    return prisma.company.create({
        data: {
            id: data.id.trim().toLowerCase(),
            name: data.name
        }
    });

}