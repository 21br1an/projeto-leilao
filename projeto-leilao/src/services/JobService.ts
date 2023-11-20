import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserService {
    constructor(){

    }

    async deleteLeilao(leilao: string){
        try{
            const deletedLeilao = await prisma.leilao.delete({
                where: {
                    leilao
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