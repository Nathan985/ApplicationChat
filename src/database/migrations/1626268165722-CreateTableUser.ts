import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1626268165722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Tbl_Users",
            columns: [
                {
                    name: "_id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true,
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "avatar",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                    isNullable: true,
                    default: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tbl_Users");
    }

}
