import { MigrationInterface, QueryRunner } from "typeorm";

export class modificandoTamanho1675390413547 implements MigrationInterface {
    name = 'modificandoTamanho1675390413547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" character varying(14) NOT NULL`);
    }

}
