import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
    constructor(){

    }

    async listLeilao(produto?: string){
        try{
            if(produto){
                const leilao = await prisma.user.findUnique({
                    where: {
                        produto
                    }
                });
                return leilao;
            }else{
                const leiloes = await prisma.leilao.findMany();
                return leiloes;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const newuser = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeilao(id: string, leilao: Prisma.LeilaoUpdateInput){
        try{
            const updatedLeilao = await prisma.leilao.update({
                where: {
                    produto
                },
                data: leilao
            });

            return updatedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLeilao(produto: string){
        try{
            const deletedLeilao = await prisma.leilao.delete({
                where: {
                    produto
                }
            });

            return deletedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();