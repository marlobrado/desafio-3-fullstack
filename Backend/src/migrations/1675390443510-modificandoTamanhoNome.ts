import { MigrationInterface, QueryRunner } from "typeorm";

export class modificandoTamanhoNome1675390443510 implements MigrationInterface {
    name = 'modificandoTamanhoNome1675390443510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "name" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "name" character varying(60) NOT NULL`);
    }

}
