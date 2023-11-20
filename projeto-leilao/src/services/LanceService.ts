import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }

    async listLance(comprador, leilao?: string){
        try{
            if(comprador, leilao){
                const lance = await prisma.lance.findUnique({
                    where: {
                        comprador
                        leilao
                    }
                });
                return lance;
            }else{
                const lances = await prisma.lance.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newlance = await prisma.lance.create({
                data: lance
            });
            return newlance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance((comprador, leilao: string, lane: Prisma.LanceUpdateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where: {
                    comprador
                    leilao
                },
                data: lance
            });

            return updatedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(comprador, leilao: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where: {
                    comprador
                    leilao
                }
            });

            return deletedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();