import { MigrationInterface, QueryRunner } from "typeorm";

export class createContact1675351454141 implements MigrationInterface {
    name = 'createContact1675351454141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "telephone" character varying(14) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
