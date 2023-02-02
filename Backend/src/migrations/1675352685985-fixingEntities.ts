import { MigrationInterface, QueryRunner } from "typeorm";

export class fixingEntities1675352685985 implements MigrationInterface {
    name = 'fixingEntities1675352685985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "telphone" TO "telephone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "telephone" TO "telphone"`);
    }

}
